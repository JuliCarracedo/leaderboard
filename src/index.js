/* eslint no-unused-vars: "off" */
import css from './style.css';
import createScore from './createScore';
import postScore from './postScore';
import getStorage from './getStorage';
import loadStored from './loadStored';

const form = document.querySelector("form");
const formName = document.querySelector("input#name");
const formScore = document.querySelector("input#score");
const refresh = document.querySelector("button.btn");
const list = getStorage();
console.log(list);
loadStored(list);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (formName.value == '' || formName.value == ' ' ||formScore.value == '' || formScore.value == ' ' ){return};
    if(parseInt(formScore.value,10) <1){return};
    const score = createScore(formName.value, parseInt(formScore.value,10));
    console.log(score);
    postScore(score);
    list.push(score);
    list.sort((obj1, obj2) => {return obj2.score - obj1.score});
    localStorage.setItem('scores', JSON.stringify(list));

    formScore.value = '';
    formName.value = '';

});

refresh.addEventListener('click', (e) => {e.preventDefault(); location.reload()});
