const root = document.querySelector(":root");
const sizeSlider = document.querySelector("#sizeSlider");
const resetButton = document.querySelector("#resetSlider");
const startButton = document.querySelector("#start")
// const clientWidth = document.querySelector("body").clientWidth;
// root.style.setProperty("--gameSize","100vh")

sizeSlider.addEventListener("mouseup", function () {
    let inputValue = sizeSlider.value;
    root.style.setProperty("--gameSize", inputValue + "px")
})

resetButton.addEventListener("click", function () {
    sizeSlider.value = document.querySelector("body").clientWidth / 3.5;
    root.style.setProperty("--gameSize", sizeSlider.value + "px")
})

startButton.addEventListener("click", function () {
    startButton.style.display="none";
    setup()
})

body.addEventListener("keydown",function(e){
    const key = e.key;
    if(key=="Enter" && startButton.style.display !== "none"){startButton.click()}
    else if (key=="Escape"){pause()}
})

let flipSwitch=false

function pause(){
    if(stop==true){
    stop=false} else {stop=true} 
}