const temperature_span = document.querySelector(".temperature_data");
const humidity_span = document.querySelector(".humidity_data");

const getTemperSensorValue = () => {
    return fetch("/get_temper_sensor_value").then((response) =>
        response.json()
    );
};

const renderTemperValue = async () => {
    sensorData = await getTemperSensorValue();
    temperature = sensorData.temperature;
    humidity = sensorData.humidity;
    temperature_span.innerText = temperature;
    humidity_span.innerText = humidity;
};

const getPowerValue = () => {
    return fetch("/calc_power_oneday").then((response) => response.json());
};

const renderPowerValue = async () => {
    const sensorData = await getPowerValue();
};

renderPowerValue();
setInterval(renderTemperValue, 1000);
