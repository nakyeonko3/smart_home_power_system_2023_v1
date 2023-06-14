import BMP180 as BMP180
import mqtt_client as mqtt_client
import threading

bmp180thread = threading.Thread(target=BMP180.get_BMP180_sensor_data)
bmp180thread.start()
mqtt_client.mqtt_clinet_start()
