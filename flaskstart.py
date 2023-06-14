from flask import Flask, render_template, jsonify
import threading

import mqtt_client
import BMP180
import set_relay
import read_csvfile
import humidity_sensor
import calc_power


app = Flask(__name__)


mqtt_clinet_start_thread = threading.Thread(target=mqtt_client.mqtt_clinet_start)
get_BMP180_sensor_data_thread = threading.Thread(target=BMP180.get_BMP180_sensor_data)
mqtt_clinet_start_thread.start()
get_BMP180_sensor_data_thread.start()


@app.route("/")
def index():
    return render_template("index.html")


# ------------relay control ---------
@app.route("/relay_turn_on")
def set_relay_turn_on():
    set_relay.set_relay_on()
    return "relay_turn_on"


@app.route("/relay_turn_off")
def set_relay_turn_off():
    set_relay.set_relay_off()
    return "relay_turn_off"


@app.route("/relay_gpio_cleanup")
def set_relay_gpio_cleanup():
    set_relay.set_relay_gpio_cleanup()
    return "relay_gpio_cleanup"


# ------------get_temperature---------
@app.route("/get_temper_sensor_value")
def get_temperaturep():
    temperature = read_csvfile.get_senor_value(file_name="csv/bmp180sensor.csv")
    return jsonify(
        {
            "temperature": temperature,
            "humidity": humidity_sensor.get_humidiy_sesnor_value(),
        }
    )


# ------------get_power_value---------
@app.route("/calc_power_oneday")
def get_calc_power_oneday():
    data = calc_power.total_data()
    return jsonify({"power_oneday": data})


@app.route("/calc_power_onehour")
def get_calc_power_onehour():
    data = calc_power.hour_total()
    return jsonify(data)


app.run(host="0.0.0.0", port=18082, debug=True)
