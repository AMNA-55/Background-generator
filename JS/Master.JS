var css = document.querySelector("strong");
var colorone = document.querySelector(".colorone");
var colortwo = document.querySelector(".colortwo");
var body = document.getElementById("gradient");

function c() {
    body.style.background = 
    "linear-gradient(to right,"
    +colorone.value
    +","
    +colortwo.value
    +")";
    css.textContent = body.style.background + ";";
}
colorone.addEventListener("input", c);
colortwo.addEventListener("input", c);
