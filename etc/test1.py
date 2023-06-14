import os
import pandas as pd
import json

# 현재 스크립트의 디렉토리를 구함
dir_path = os.path.dirname(os.path.realpath(__file__))

# 스크립트의 디렉토리에 있는 sensor.csv 파일의 절대 경로
file_path = os.path.join(dir_path, 'csv/power_sensor.csv')

df = pd.read_csv(file_path)

# 날짜와 시간을 datetime 객체로 변환
df['Date'] = pd.to_datetime(df['Date'])

# 시간별로 그룹화하고, 전력량 합계 계산
df = df.set_index('Date').groupby(pd.Grouper(freq='h')).sum()

# Dataframe to JSON 변환
result = df.reset_index().to_json(orient='records', date_format='iso')

# JSON string을 dictionary로 변환
data = json.loads(result)

# Date format을 'YYYY-MM-DD HH:MM:SS' 형식으로 바꿈
for item in data:
    item['Date'] = item['Date'][:19].replace('T', ' ')  # 'T' 문자를 공백으로 교체

# 결과 출력
print(json.dumps(data, indent=2))