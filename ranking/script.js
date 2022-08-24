let firstArr = [];
let rankArr = [];
let counter = 1;
let top3 = 0;
let pos = 0;



function onInit() {
    var ranktitle1 = document.getElementById("ranktitle1");
    var ranktitle2 = document.getElementById("ranktitle2");
    var ranktitle3 = document.getElementById("ranktitle3");

    firstArr.splice(0);


    if (localStorage.getItem("user")) {
        firstArr = JSON.parse(localStorage.getItem("user"));

        for(i = 0; i < 3; i++){
            returnBigger();
            maior = 0;
            nick = "";
        }
        

    }

    if (rankArr.length > 0) {
        ranktitle1.innerText = rankArr[0].nick + " - " + rankArr[0].realCounter + " pts";
        if (rankArr.length > 1) {
            ranktitle2.innerText = rankArr[1].nick + " - " + rankArr[1].realCounter + " pts";
            if (rankArr.length > 2) {
                ranktitle3.innerText = rankArr[2].nick + " - " + rankArr[2].realCounter + " pts";
            }
        }
    }
}

function returnBigger(){
    let maior = 0;
    let nick = "";

    for(j = 0; j < firstArr.length; j++){
        if(maior < firstArr[j].realCounter){
            maior = firstArr[j].realCounter;
            nick = firstArr[j].nick;
            pos = j
        }
    }

    rankArr.push({nick: nick, realCounter: maior});
    firstArr.splice(pos, pos + 1);
}

onInit();