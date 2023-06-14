import pandas as pd
import re

error_data = {
    "csv/power_sensor.csv": 0,
    "csv/bmp180sensor.csv": 0,
}

print(error_data["csv/power_sensor.csv"])


def get_senor_value(file_name):
    try:
        df = pd.read_csv(file_name)
        last_number = float(df["Sensor"].values[-1])
        error_data[file_name] = last_number
        return last_number
    except:
        return error_data[file_name]
    # csv file 마지막 줄의 Sensor 값을 가져옴


def get_date_last_value(file_name):
    df = pd.read_csv(file_name)
    last_Date = df["Date"].values[-1]
    return last_Date
    # csv file 마지막 줄의 Sensor 값을 가져옴


def get_last_line(file_name):
    with open(file_name, "r", encoding="utf-8", errors="ignore") as scraped:
        final_line = scraped.readlines()[-1]
    final_line = re.sub(r"[^0-9]", "", final_line)
    return final_line
    # csv 마지막줄다 가져옴


# if __name__ == "__main__":
#     print(get_senor_value(file_name="csv/power_sensor.csv"))
#     print(get_senor_value(file_name="csv/bmp180sensor.csv"))
