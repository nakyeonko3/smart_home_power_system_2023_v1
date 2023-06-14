(async () => {
    const labels = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
    ];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "하루 전력 소비 그래프",
                data: [40.5, 59, 80, 81, 80, 80, 81, 80],
                fill: false,
                borderColor: "red",
                // segment: {
                //     borderColor: (ctx) =>
                //         ctx.p0.parsed.x >= 4 ? "blue" : "red",
                // },
                tension: 0.1,
            },
        ],
    };
    // </block:setup>

    const options = {
        responsive: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    // <block:config:0>
    const config = {
        type: "line",
        data: data,
        options: options,
    };
    // </block:config>

    const ctx = document.getElementById("onedayPowerGraph").getContext("2d");
    const myChart = new Chart(ctx, config);
})();
