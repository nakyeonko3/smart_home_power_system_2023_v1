(async () => {
    const labels = ["아침 12시", "낮 12시 ~ 18시", "밤 18시"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "전력 비중",
                data: [50, 20, 0],
                fill: false,
                borderColor: "red",
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#299b63"],
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

    const ctx = document.getElementById("doughnut").getContext("2d");
    console.log("hello, world");
    const myChart = new Chart(ctx, config);
})();
