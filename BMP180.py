import Adafruit_BMP.BMP085 as BMP085
import RPi.GPIO as GPIO
import time
import create_csvfile as create_csvfile

sensor = BMP085.BMP085(busnum=1)  # BMP180센서의 인스턴스 sensor 생성


def get_BMP180_sensor_data():
    while True:
        time.sleep(1)
        # 온도 값을 읽어서 변수에 저장
        temp = sensor.read_temperature()
        # 측정값을 출력
        # print("Temp = {0:0.2f} *C".format(temp))
        create_csvfile.append_csvfile(temp, "bmp180sensor.csv")


# while True:
#     time.sleep()
#     print(get_BMP180_sensor_data())
get_BMP180_sensor_data()
