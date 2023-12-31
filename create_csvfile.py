import pandas as pd
from datetime import datetime
import os


def append_csvfile(sensor_value, file_name="sensor.csv"):
    # Specify the directory to save the CSV file
    directory = "csv"

    # Create the directory if it does not exist
    if not os.path.exists(directory):
        os.makedirs(directory)

    # Create a new row with current datetime and sensor value
    new_row = {
        "Date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "Sensor": sensor_value,
    }

    # Append the new row to the existing CSV file
    file_path = os.path.join(directory, file_name)
    with open(file_path, "a") as f:
        writer = pd.DataFrame([new_row])
        writer.to_csv(f, header=f.tell() == 0, index=False, lineterminator="\n")
