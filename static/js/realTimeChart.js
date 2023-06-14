(async () => {
    const data = {
        labels: [],
        datasets: [
            {
                label: "w",
                data: [],
                borderColor: "rgb(54,162,235)",
                backgroundColor: "rgb(145,203,245)",
                borderWidth: 1,
            },
        ],
    };
    const config = {
        type: "line",
        data,
        options: {
            animation: false,
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    type: "realtime",
                    realtime: {
                        onRefresh: (chart) => {
                            chart.data.datasets.forEach(async (dataset) => {
                                dataset.data.push({
                                    x: Date.now(),
                                    y: 34,
                                });
                            });
                        },
                    },
                },
                y: { beginAtZero: true },
            },
        },
    };

    const myChart = new Chart(document.getElementById("realTimeChart"), config);

    // document
    //   .getElementById('pause_button')
    //   .addEventListener('click', async () => {
    //     if (myChart.options.plugins.streaming.pause === false) {
    //       myChart.options.plugins.streaming.pause = true;
    //     } else {
    //       myChart.options.plugins.streaming.pause = false;
    //     }
    //     // myChart.update({ delay: 0 });
    //   });
})();
