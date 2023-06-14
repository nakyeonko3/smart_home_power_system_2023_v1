// 전력 예측 그래프 코드

const getMeasurementData = async () => {
    const response = await fetch("/test");
    const jsonData = await response.json();
    const { test1 } = jsonData;
    const tmp = [NaN, NaN, NaN];
    const test1Array = test1.concat(tmp);
    console.log(test1Array);
    return test1Array;
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
                label: "내일 예상 전력 데이터",
                data: [
                    65, 59, 40, 21, 30, 25, 59, 80, 81, 80, 65, 59, 80, 81, 80,
                ],
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

    const ctx = document.getElementById("lineChart2").getContext("2d");
    const myChart = new Chart(ctx, config);
})();
