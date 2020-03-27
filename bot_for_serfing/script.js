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
let searchWords  = ["Гобой","Флейта","Саксофон","Валторна","Кларнет","Фагот"];
let searchWord  = searchWords[getRandom(0,searchWords.length)];
let i = 0;

if (document.getElementsByName("btnK")[1] != undefined){
    let timerId = setInterval(()=>{
        googleInput.value += searchWord[i];
        i++;
        if (i==searchWord.length) {
            clearInterval(timerId);
            document.getElementsByName("btnK")[1].click();
        }
    },getRandom(50, 1000));
}
else if (location.host == "www.google.com"){
    let flag = true;
    let links = document.links;
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai') != -1){
            flag = false;
            links[i].click();
            break;
        }
    }
    if (flag){
        if (document.getElementsByClassName("YyVfkd")[0].innerText>9)
            location.href = "https://www.google.com/";
        else
            setTimeout(()=>{pnnext.click();},getRandom(1000,5000));
    }
}
else {
    let links = document.links;
    setInterval(()=>{
        let index = getRandom(0,links.length);
        console.log(links[index]);
        links[index].click();
        if (getRandom(0,101)<=30) location.href = "https://www.google.com/";
    },getRandom(3000, 8000));
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
