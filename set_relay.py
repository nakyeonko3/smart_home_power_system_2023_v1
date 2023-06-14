import RPi.GPIO as GPIO
import time

# GPIO.setwarnings(False)  # 경고 메시지 비활성화
GPIO.setmode(GPIO.BCM)  # GPIO Numbers instead of board numbers
RELAIS_1_GPIO = 14
GPIO.setup(RELAIS_1_GPIO, GPIO.OUT)  # GPIO Assign mode


def set_relay_off():
    GPIO.output(RELAIS_1_GPIO, GPIO.HIGH)  # on


def set_relay_on():
    GPIO.output(RELAIS_1_GPIO, GPIO.LOW)  # off


def set_relay_gpio_cleanup():
    GPIO.cleanup()


set_relay_on()
time.sleep(5)
set_relay_off()
time.sleep(5)
GPIO.cleanup()
