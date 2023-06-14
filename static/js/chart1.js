// // 전력 예측 그래프 코드

// const getMeasurementData = async () => {
//     const response = await fetch("/test");
//     const jsonData = await response.json();
//     const { test1 } = jsonData;
//     const tmp = [NaN, NaN, NaN];
//     const test1Array = test1.concat(tmp);
//     console.log(test1Array);
//     return test1Array;
// };

const getForecastData = async () => {
    const response = await fetch("/calc_power_oneday");
    const jsonData = await response.json();
    // const tmp = [NaN, NaN, NaN, NaN, NaN];
    // const test2Array = tmp.concat(test2);
    console.log(jsonData);
    return jsonData;
};

(async () => {
    const labels = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
    ];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "전력 데이터",
                data: [65, 39, 20, 30, 25, 59, 80],
                fill: false,
                borderColor: "#45e8bc",
                tension: 0.1,
            },
        ],
    };
    // </block:setup>

    // <block:config:0>
    const config = {
        type: "line",
        data: data,
    };
    // </block:config>

    const ctx = document.getElementById("lineChart").getContext("2d");
    const myChart = new Chart(ctx, config);
})();
