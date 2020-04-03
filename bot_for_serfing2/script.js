// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementsByName('text')[0];
let buttonYandex = document.getElementsByClassName("button_theme_websearch")[0];
let searchWords = ['Гобой','Кларнет','Саксофон','Флейта','Валторна','Фагот'];
let searchWord = searchWords[getRandom(0,searchWords.length)];
let i = 0;
let links = document.links;

if (buttonYandex!=undefined){
   let timerId = setInterval(()=>{
       yandexInput.value += searchWord[i];
        i++;
        if (i==searchWord.length) {
           clearInterval(timerId);
            buttonYandex.click();}
    },500);
}
else if (location.hostname == "yandex.ru"){
    let flag = true;
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            flag = false;
            links[i].removeAttribute("target");
            //console.log(a);
            links[i].click();//
            break;
        }
    }
    if (flag){
        setTimeout(()=>{
            if (document.querySelector('a[aria-label]').__1585768023692==!"uniq499")
                document.querySelector('a [aria-label="Следующая страница"]').click();
},3800);
    }
}

else {
    setInterval(()=>{
        if (getRandom(0,100)<30) location.href = "https://yandex.ru/";
        let index = getRandom(0, links.length)
        links[index].click();
    },5000);
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
