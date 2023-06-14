(async () => {
    const labels = ["00", "01", "02"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "하루 전력 소비 그래프",
                data: [10, 20, 80],
                fill: false,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
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
        responsive: true,
        cutoutPercentage: 70,
    };

    // <block:config:0>
    const config = {
        type: "doughnut",
        data: data,
        options: options,
    };
    // </block:config>

    const ctx = document.getElementById("onedayDonutGraph").getContext("2d");
    const myChart = new Chart(ctx, config);
})();
