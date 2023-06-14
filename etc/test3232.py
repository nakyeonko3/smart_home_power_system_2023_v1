import pandas as pd
import numpy as np


def total_data():
    df = pd.read_csv("csv/power_sensor.csv")
    total = np.sum(df.Sensor, axis=0)
    print(total)
    return total


total_data()
