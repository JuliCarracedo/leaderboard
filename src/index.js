/* eslint no-unused-vars: "off" */
/* eslint no-restricted-globals: "off" */
import css from './style.css';
import createScore from './createScore.js';
import loadStored from './loadStored.js';
import postToAPI from './postToAPI.js';
import emptyBoard from './emptyBoard.js';

const form = document.querySelector('form');
const formName = document.querySelector('input#name');
const formScore = document.querySelector('input#score');
const refresh = document.querySelector('button.btn');

const getStorage = async () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3IGjFzzBEY0MX1krdUtm/scores/')
    .then((response) => response.json()).then((json) => {
      const list = json.result;
      loadStored(list);
    });
};

getStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formName.value === '' || formName.value === ' ' || formScore.value === '' || formScore.value === ' ') { return; }
  if (parseInt(formScore.value, 10) < 1) { return; }
  const score = createScore(formName.value, parseInt(formScore.value, 10));
  postToAPI(score);
  emptyBoard();
  getStorage();
  formScore.value = '';
  formName.value = '';
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  emptyBoard();
  getStorage();
});
