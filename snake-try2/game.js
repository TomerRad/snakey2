let score = 0;
let topRec = 7;
let leftRec = 4;
let facing = "right";
let stop = true;
let snakeCol = [3, 4, 5];
let snakeRow = [7, 7, 7];
let snakeLength = 3;
let applesCol = [11];
let applesRow = [7];
let pb = 0;
const body = document.querySelector("body")
const head = document.querySelector(".head")
// function start() {
//     for (let i = 0; i < 100000; i++) {
//         setTimeout(function () {
//             if (stop) return;
//             forward()
//         }, i * 100)
//     }
// }

function firstCall(){
    if(stop==false){
    setTimeout(function(){forward();secondCall()},100)
}
}

function secondCall(){
    if(stop==false){
    setTimeout(function(){forward();firstCall()},100)
    }
}
body.addEventListener("keydown", function (e) {
    const key = e.key.toUpperCase()
    if (key == "W" && facing !== "down" && stop == false || key == "ARROWUP" && facing !== "down" && stop == false) {
        facing = "up"
        document.querySelector(".head").style.rotate = "270deg"
    } else if (key == "A" && facing !== "right" && stop == false || key == "ARROWLEFT" && facing !== "right" && stop == false) {
        facing = "left"
        document.querySelector(".head").style.rotate = "180deg"
    } else if (key == "S" && facing !== "up" && stop == false || key == "ARROWDOWN" && facing !== "up" && stop == false) {
        facing = "down"
        document.querySelector(".head").style.rotate = "90deg"
    } else if (key == "D" && facing !== "left" && stop == false || key == "ARROWRIGHT" && facing !== "left" && stop == false) {
        facing = "right"
        document.querySelector(".head").style.rotate = "0deg"
    }
})

function forward() {
    if (facing == "up" && topRec !== 0) {
        topRec--
    } else if (facing == "left" && leftRec !== 0) {
        leftRec--
    } else if (facing == "down" && topRec !== 14) {
        topRec++
    } else if (facing == "right" && leftRec !== 14) {
        leftRec++
    } else if (leftRec == 14 || leftRec == 0 || topRec == 14 || topRec == 0) {
        stop = true
        setTimeout(function(){killSnake()},500)
        setTimeout(function () {
            death()
        }, 1500)

    }

    function death() {
        $(".rec").remove();
        $(".apple").remove();
        gameCont.style.background = "url('resources/snakeLogo.jpeg')"
        gameCont.style.backgroundSize = "100%"
        score = 0;
        scoreElement.textContent = 0
        startButton.style.display = "inline-block"
        topRec = 7
        leftRec = 5
        snakeCol = [3, 4, 5];
        snakeRow = [7, 7, 7];
        snakeLength = 3;
        facing = "right";
        move(7, 5)
    }

    function killSnake(){
        for(let i=1;i<snakeLength;i++){
            setTimeout(function(){document.querySelector("#snek"+i).remove()},i*100)
            if (i==snakeLength-1){$(".head").remove()}
        }
    }
    if (leftRec == applesCol[0] && topRec == applesRow[0]) {
        newApple()
        powerUp()
    }

    move(topRec, leftRec)
    snakeCol.push(leftRec)
    snakeCol.shift()
    snakeRow.push(topRec)
    snakeRow.shift()
    moveBody()
}

function moveBody() {
    for (let i = 0; i < snakeCol.length; i++) {
        if (i == (snakeCol.length) - 1) {
            // document.querySelector("#snek"+(i+1)).classList.add("last")
        }
        else {
            document.querySelector("#snek" + (i + 1)).style.left = "calc((var(--gameSize)/15)*" + snakeCol[i]
            document.querySelector("#snek" + (i + 1)).style.top = "calc((var(--gameSize)/15)*" + snakeRow[i]
        }
    }
}

function powerUp() {
    $("#gameCont").prepend("<div id='snek" + snakeLength + "'class='snake body'></div>")
    snakeCol.push(20)
    snakeRow.push(20)
    score++
    scoreElement.textContent = score;
    pb++
    pbElement.textContent = pb;
    snakeLength++
}

function move(top, left) {
    root.style.setProperty("--top", top)
    root.style.setProperty("--left", left)
}

function newApple() {
    applesCol.push(Math.floor(Math.random() * 15))
    applesCol.shift()
    applesRow.push(Math.floor(Math.random() * 15))
    applesRow.shift()
    document.querySelector(".apple").style.left = "calc(var(--gameSize)/15*" + applesCol[0] + ")"
    document.querySelector(".apple").style.top = "calc(var(--gameSize)/15*" + applesRow[0] + ")"
}