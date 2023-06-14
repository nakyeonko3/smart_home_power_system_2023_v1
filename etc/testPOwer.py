import pandas as pd
import numpy as np


def hour_total():
    df = pd.read_csv("csv/power_sensor.csv")
    data = pd.to_datetime(df["Date"])
    df["hour"] = data.dt.hour
    df_sum = pd.DataFrame()
    df_sum = df.groupby("hour")["Sensor"].sum()
    dict = df_sum.to_dict()
    print(dict)
