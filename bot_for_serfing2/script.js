// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
let googleInput = document.getElementsByName('q')[0];
let btnK = document.getElementsByName('btnK')[1];
let searchWords= ['Гобой','Кларнет','Саксофон','Флейта','Валторна','Фагот'];
let searchWord = searchWords[getRandom(0,searchWords.length)];
let i = 0;
let links = document.links;

if (btnK!=undefined){
    let timerId = setInterval(()=>{
        googleInput.value += searchWord[i];
        i++;
        if (i==searchWord.length) {
            clearInterval(timerId);
            btnK.click();}
    },500);
}
else if (location.hostname == "www.google.com"){
    let flag = true;
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            flag = false;
            links[i].click();
            break;
        }
    }
    if (flag){
        setTimeout(()=>{
            if(document.querySelector('.YyVfkd').innerText < 10)
                pnnext.click();
            else
                location.href = "https://www.google.com/";
        },3800);
    }
}
else {
    setInterval(()=>{
        if (getRandom(0,100)<30) location.href = "https://www.google.com/";
        let index = getRandom(0, links.length)
        links[index].click();
    },5000);
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}



