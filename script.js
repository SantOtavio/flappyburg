var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var game = document.getElementById("game");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var counter2 = 0;
var realCounter = 0;

game.addEventListener('animationiteration', () => {
    block1.style.height = "35%";
    block2.style.height = "35%";
    var random1 = Math.floor(Math.random() * 70);
    var random2 = (70 - random1);
    setHeight(random1, random2);
    if (counter > 0) {
        realCounter = realCounter + ((counter2 + 1) - counter);
        counter2 = 0;
        counter = 0;
    }
    var counterHtml = document.getElementById("counter");
    counterHtml.innerText = realCounter;
});

var rangeIntersect = function (min0, max0, min1, max1) {
    return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1)
}
var rectIntersect = function (r0, r1) {
    return rangeIntersect(r0.left, r0.right, r1.left, r1.right) && rangeIntersect(r0.top, r0.bottom, r1.top, r1.bottom)
}

var interval = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top = (characterTop + 3) + "px";

    var boxBlock1 = document.getElementById("block1").getBoundingClientRect();
    var boxCharacter = character.getBoundingClientRect();
    var boxBlock2 = block2.getBoundingClientRect();
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cTop = -(500 - characterTop);
    if ((characterTop > 160) || (rectIntersect(boxCharacter, boxBlock1)) || (rectIntersect(boxCharacter, boxBlock2))) {
        alert("You lose");
        localStorage.setItem("score", realCounter);
        realCounter = 0;
        character.style.top = "-40%"
    }

    var blockLeft = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));

    if (blockLeft <= 60) {
        counter++;
        counter2++;

    }
}, 9);


function jump() {

    jumping = 1;
    let jumpCount = 0;

    var jumpInterval =
        setInterval(() => {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if ((characterTop > -550) && (jumpCount < 20)) {
                character.style.top = (characterTop - 6) + "px";
                character.style.animation = "character 0.3s";
            }
            jumpCount++;
            if (jumpCount == 20) {
                clearInterval(jumpInterval);
                jumping = 0;
                jumpCount = 0;
            }
        }, 8);

    character.style.animation = "character1 0.2s";
}

function setHeight(random1, random2) {
    block1.style.height = random2 + "%";
    block2.style.height = random1 + "%";
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}