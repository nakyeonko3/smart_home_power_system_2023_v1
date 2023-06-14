const PlugButton1 = document.querySelector(".PlugButton1");
const PlugButton2 = document.querySelector(".PlugButton2");
const PlugButton3 = document.querySelector(".PlugButton3");
const PlugButton4 = document.querySelector(".PlugButton4");
const PlugButton1Background = document.querySelector(".PlugButton1-background");
const PlugButton2Background = document.querySelector(".PlugButton2-background");
const PlugButton3Background = document.querySelector(".PlugButton3-background");
const PlugButton4Background = document.querySelector(".PlugButton4-background");

// PlugButton1.innerText = "OFF";
// PlugButton2.innerText = "OFF";

// PlugButton1Background.style.backgroundColor = "black";
// PlugButton2Background.style.backgroundColor = "black";

PlugButton1Background.addEventListener("click", function () {
    if (PlugButton1.innerText === "OFF") {
        PlugButton1.innerText = "ON";
        fetch("relay_turn_on");
        PlugButton1Background.style.backgroundColor = "#ffff";
    } else {
        PlugButton1.innerText = "OFF";
        fetch("relay_turn_off");
        PlugButton1Background.style.backgroundColor = "black";
    }
});

PlugButton2Background.addEventListener("click", function () {
    if (PlugButton2.innerText === "OFF") {
        PlugButton2.innerText = "ON";

        PlugButton2Background.style.backgroundColor = "#ffff";
    } else {
        PlugButton2.innerText = "OFF";
        PlugButton2Background.style.backgroundColor = "black";
    }
});
PlugButton3Background.addEventListener("click", function () {
    if (PlugButton3.innerText === "OFF") {
        PlugButton3.innerText = "ON";
        PlugButton3Background.style.backgroundColor = "#ffff";
    } else {
        PlugButton3.innerText = "OFF";
        PlugButton3Background.style.backgroundColor = "black";
    }
});

PlugButton4Background.addEventListener("click", function () {
    if (PlugButton4.innerText === "OFF") {
        PlugButton4.innerText = "ON";
        PlugButton4Background.style.backgroundColor = "#ffff";
    } else {
        PlugButton4.innerText = "OFF";
        PlugButton4Background.style.backgroundColor = "black";
    }
});
