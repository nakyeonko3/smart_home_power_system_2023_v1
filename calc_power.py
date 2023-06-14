import pandas as pd
import json
import numpy as np

# import os

# # 현재 스크립트의 디렉토리를 구함
# dir_path = os.path.dirname(os.path.realpath(__file__))

# # 스크립트의 디렉토리에 있는 sensor.csv 파일의 절대 경로
# file_path = os.path.join(dir_path, "csv/power_sensor.csv")


# 날짜와 시간을 datetime 객체로 변환
# df = pd.read_csv("csv/power_sensor.csv")
# df["Date"] = pd.to_datetime(df["Date"])


def total_data():
    df = pd.read_csv("csv/power_sensor.csv")
    total = np.sum(df.Sensor, axis=0)
    # print(total)
    return int(total)


def hour_total():
    df = pd.read_csv("csv/power_sensor.csv")
    data = pd.to_datetime(df["Date"])
    df["hour"] = data.dt.hour
    df_sum = pd.DataFrame()
    df_sum = df.groupby("hour")["Sensor"].sum()
    hour_total = df_sum.to_dict()
    return hour_total


# print(total_data())
# def calc_power_onehour(df):
#     df_onehour = df
#     # 시간별로 그룹화하고, 전력량 합계 계산
#     df_onehour = df_onehour.set_index("Date").groupby(pd.Grouper(freq="h")).sum()

#     # Dataframe to JSON 변환
#     result = df_onehour.reset_index().to_json(orient="records", date_format="iso")

#     # JSON string을 dictionary로 변환
#     data = json.loads(result)

#     # Date format을 'YYYY-MM-DD HH:MM:SS' 형식으로 바꿈
#     for item in data:
#         item["Date"] = item["Date"][:19].replace("T", " ")  # 'T' 문자를 공백으로 교체

#     # 결과 출력
#     return data


# if __name__ == "__main__":
#     calc_power_oneday(df)
#     calc_power_onehour(df)
