'use strict';

let TabsArray = Array.from(document.querySelectorAll('div.tab'));
let ContentsArray = Array.from(document.querySelectorAll('div.tab__content'));
let newTab = 0;

function setNewTab(keyCode) {
    if (keyCode === 39) {
        newTab === TabsArray.length - 1 ? newTab = 0 : ++newTab;
    } else if (keyCode === 37) {
        newTab === 0 ? newTab = TabsArray.length - 1 : --newTab;
    }
};

function activateTabAndContent(newTab) {
    document.querySelector('div.tab_active').classList.remove('tab_active');
    document.querySelector('div.tab__content_active').classList.remove('tab__content_active');

    TabsArray[newTab].classList.add('tab_active');
    ContentsArray[newTab].classList.add('tab__content_active');
};

TabsArray.forEach(function (item) {
    item.addEventListener('click', function () {
        newTab = TabsArray.indexOf(item);
        activateTabAndContent(newTab);
    });
});

addEventListener('keydown', event => {
    setNewTab(event.keyCode);
    activateTabAndContent(newTab);
});