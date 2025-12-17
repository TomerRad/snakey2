const gameCont = document.querySelector("#gameCont")
const scoreElement = document.querySelector("#score")
const pbElement = document.querySelector("#pb")
let pressedOnce = false
function setup() {
    setTimeout(function(){stop=false},1000)
    let i;
    let col = 0;
    let row = 0;
    applesCol = [11];
    applesRow = [7];
    for (i=0; i < 225; i++) {
        if (i % 2 == 0) {
            $("#gameCont").append("<div id='comp" +i+ "' class='rec rec1 col"+col+" row" +row+ "'></div>")
        } else {
            $("#gameCont").append("<div id='comp" +i+ "' class='rec rec2 col"+col+" row" +row+ "'></div>")
        }
        if (col==14){
            col=0
            row++
        } else {col++}
    }
    $("#gameCont").prepend("<div id='snek0'class='snake head apeared'></div>")
    $("#gameCont").prepend("<div id='snek1'class='snake body apeared'></div>")
    $("#gameCont").prepend("<div id='snek2'class='snake body apeared'></div>")
    $("#gameCont").prepend("<div id='apple0' class='apple'></div>")
    gameCont.style.background="url('resources/bg.png')"
    gameCont.style.backgroundSize="100%"
    scoreElement.textContent=0
    document.querySelector(".apple").style.left="calc(var(--gameSize)/15*"+applesCol[0]+")"
    document.querySelector(".apple").style.top="calc(var(--gameSize)/15*"+applesRow[0]+")"
    if(pressedOnce==false){
        // start()
        firstCall()
    }
    $(".snake").css("scale","1")
    moveBody()
    pressedOnce=true
}