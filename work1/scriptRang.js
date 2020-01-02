var base = [];
var rangHero = [];
var rangVlastelin = [];
var rangLegend = [];
var lobbiHero = [];
var lobbiLegend = [];
var lobbiVlastelin = [];
var lobbi = [];
var gamesHero = [];
var gamesHeroFound = false;
var gamesHeroMessage = "";
const scatterMax = 50;
const rangHeroMin = 0;
const rangHeroMax = 10;
const rangLegendMin = 1001;
const rangLegendMax = 2000;
const rangVlastelinMin = 2001;
const rangVlastelinMax = 3000;



createRandomUser(base,50);
console.log(base);
for (let i = 0;i < base.length;i++) {
    searchLobbi(base[i]);
}


searchGame();
for(let i = 0;i < gamesHero.length; i++) {
    console.log("uid = " + base[gamesHero[i]].uid + " || mmr = " + base[gamesHero[i]].mmr);
}


function createRandomUser(arr,count) {
    for (let i = 0;i < count; i++) {
        arr.push({
            uid : i,
            mmr : Math.floor(Math.random() * 
                (rangHeroMax - rangHeroMin + 1) ) + rangHeroMin
        });
    }

}

function searchGame() {
    let tmpUserMain;
    let tmpUser;
    for(let i = 0;i < lobbiHero.length; i++) {
       tmpUserMain = base[lobbiHero[i]];
       for (let j = 0; j < lobbiHero.length; j++) {
           tmpUser = base[lobbiHero[j]];
           if (tmpUserMain.uid != tmpUser.uid) {
                if (tmpUserMain.mmr === tmpUser.mmr) {
                    if (gamesHero.length === 0) {
                        gamesHero.push(tmpUser.uid);
                        gamesHero.push(tmpUserMain.uid);
                        lobbiHero.splice(j,1);
                        lobbiHero.splice(i,1);
                        break;
                    } 
                    else {
                        for (let q = 0;q < gamesHero.length;q++) {
                            if (tmpUser.uid !== gamesHero[q] && tmpUserMain.uid !== gamesHero[q]) {
                                gamesHero.push(tmpUser.uid);
                                gamesHero.push(tmpUserMain.uid);
                                lobbiHero.splice(j,1);
                                lobbiHero.splice(i,1);                              
                                break;
                            }
                        }
                    }
                    
                }
           }
           if (gamesHero.length === 10) {
               break;
           }
       }

       if (gamesHero.length === 10) {
           break;
       }

    }
   
    
}
function rangSort(arr) {
let tmpRang = 0;
for (let i = 0; i < arr.length; i++) {
    tmpRang = arr[i];
    if (tmpRang >= rangHeroMin && tmpRang <= rangHeroMax) {
        rangHero.push(tmpRang);
    }
    else if (tmpRang >= rangLegendMin && tmpRang <= rangLegendMax) {
        rangLegend.push(tmpRang);
    }
    else if (tmpRang >= rangVlastelinMin && tmpRang <= rangVlastelinMax) {
        rangVlastelin.push(tmpRang);
    }
}
console.log("rangHero.lenght = " + rangHero.length);

}

function getRandoms(arr,count,min,max) {
    for (let i = 0; i < count; i++) {
        let tmpRang = Math.floor(Math.random() * (max - min + 1) ) + min;
        arr.push(tmpRang);
    }

}

function searchLobbi(tmpUser,role) {
    if (tmpUser.mmr >= rangHeroMin && tmpUser.mmr <= rangHeroMax) {
        lobbiHero.push(tmpUser.uid);
    }
    else if (tmpUser.mmr >= rangLegendMin && tmpUser.mmr <= rangLegendMax) {
        lobbiLegend.push(tmpUser.uid);
    }
    else if (tmpUser.mmr >= rangVlastelinMin && tmpUser.mmr <= rangVlastelinMax) {
        lobbiVlastelin.push(tmpUser.uid);
    }
}
