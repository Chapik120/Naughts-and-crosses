const pole = document.querySelector(".pole");
const span = document.getElementById("step");
const winsX_html = document.getElementById("winsX");
const winsO_html = document.getElementById("winsO");
const switchMode = document.getElementById("switch");
const winMass = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

console.log(console.log(winMass[0][0]));


let winsX = 0;
let winsO = 0;

function checkWin() {
    const divs = document.querySelectorAll(".pole div");
    winMass.forEach((items, i) => {
        if (divs[items[0] - 1].innerHTML == divs[items[1] - 1].innerHTML && divs[items[1] - 1].innerHTML == divs[items[2] - 1].innerHTML && divs[items[2] - 1].innerHTML !== "") {
            if (divs[items[0] - 1].innerHTML == "✘") {
                winsX += 1;
                winsX_html.innerHTML = winsX;
            } else {
                winsO += 1;
                winsO_html.innerHTML = winsO;
            }

            alert(`WIN: ${divs[items[2] - 1].innerHTML}`);
            divs.forEach(item => {
                item.innerHTML = "";
            });
            simbol = "✘";
            span.innerHTML = simbol;
        }
    });
}

let simbol = "✘";
pole.addEventListener("click", (e) => {
    if (e.target.className == "pole") {        
        return;
    }

    if (e.target.innerHTML !== "") {
        return;
    }

    e.target.innerHTML = simbol;
    if (simbol == "✘") {
        simbol = "Ｏ";
    } else {
        simbol = "✘";
    }
    span.innerHTML = simbol;
    checkWin();
});

switchMode.onclick = function () {
    let theme = document.getElementById("theme")

    if (theme.getAttribute("href") == "stile.css") {
        theme.href = "light.css"
    } else {
        theme.href = "stile.css"
    }
}