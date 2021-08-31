/* eslint no-unused-vars: "off" */
/* eslint no-restricted-globals: "off" */
import css from './style.css';
import createScore from './createScore.js';
import postScore from './postScore.js';
import getStorage from './getStorage.js';
import loadStored from './loadStored.js';

const form = document.querySelector('form');
const formName = document.querySelector('input#name');
const formScore = document.querySelector('input#score');
const refresh = document.querySelector('button.btn');
const list = getStorage();
loadStored(list);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formName.value === '' || formName.value === ' ' || formScore.value === '' || formScore.value === ' ') { return; }
  if (parseInt(formScore.value, 10) < 1) { return; }
  const score = createScore(formName.value, parseInt(formScore.value, 10));
  postScore(score);
  list.push(score);
  list.sort((obj1, obj2) => obj2.score - obj1.score);
  localStorage.setItem('scores', JSON.stringify(list));

  formScore.value = '';
  formName.value = '';
});

refresh.addEventListener('click', (e) => { e.preventDefault(); location.reload(); });
