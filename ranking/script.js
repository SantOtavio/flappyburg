const top1 = document.querySelector("body > div.menu-container > div > div.containerRanking > div.top1 > h1");
const top2 = document.querySelector("body > div.menu-container > div > div.containerRanking > div.top2 > h1");
const top3 = document.querySelector("body > div.menu-container > div > div.containerRanking > div.top3 > h1");


function onInit() {
    var ranktitle1 = document.getElementById("ranktitle1");
    var ranktitle2 = document.getElementById("ranktitle2");
    var ranktitle3 = document.getElementById("ranktitle3");
    let firstArr = [];
    let rankArr = [];
    let counter = 1;
    let top3 = 0;
    console.log("foi");
    if (localStorage.getItem("user")) {
        firstArr = JSON.parse(localStorage.getItem("user"));

        for (let i = 0; i < firstArr.length; i++) {
            for (let j = 0; j < firstArr.length; j++) {
                if (firstArr[i].realCounter > firstArr[j].realCounter) {
                    counter++;
                }
            }
            if (top3 < 3) {
                if (counter == (firstArr.length -1) || counter == (firstArr.length - 2)
                    || counter == (firstArr.length - 3)) {
                    rankArr.push(firstArr[i]);
                    top3++;
                }
            }
        }
    }
    console.log(rankArr);
    if (rankArr.length == 2) {
        console.log("a")
        if (rankArr[0].realCounter > rankArr[1].realCounter) {
            ranktitle1.innerText = rankArr[0].realCounter;
        } else{
            ranktitle1.innerText = rankArr[1].realCounter;
        }
    }else{
        for (let i = 0; i < rankArr.length; i++) {
            counter = 0;
            for (let j = 0; j < rankArr.length; j++) {
                if (rankArr[i].realCounter >= rankArr[j].realCounter) {
                    counter++;
                }
            }
            if (counter == rankArr.length) {
                ranktitle1.innerText = rankArr[i].realCounter;
            } else if (counter == (rankArr.length - 1)) {
                ranktitle2.innerText = rankArr[i].realCounter;
            } else {
                ranktitle3.innerText = rankArr[i].realCounter;
            }
    
        }
    }

}

onInit();