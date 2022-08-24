const top1 = document.querySelector("body > div.menu-container > div > div.containerRanking > div.top1 > h1");
const top2 = document.querySelector("body > div.menu-container > div > div.containerRanking > div.top2 > h1");
const top3 = document.querySelector("body > div.menu-container > div > div.containerRanking > div.top3 > h1");

firstArr = [];
rankArr = [];


function onInit() {
    console.log("foi");
    // if (localStorage.length > 0) {
    //     firstArr.push(localStorage.getItem("counterArr"));

    //     maior = firstArr[0][0];

    //     for (i = 0; i < 3; i++) {
    //         for (n = 0; n < firstArr.length; i++) {
    //             if (maior < firstArr[n]) {
    //                 maior = firstArr[n];
    //             }
    //         }
    //         rankArr.push(maior);
    //     }

    //     top1.innerHTML = rankArr[0];
    //     top2.innerHTML = rankArr[1];
    //     top3.innerHTML = rankArr[2];
    // }
}

onInit();