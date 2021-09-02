import postScore from './postScore.js';

const loadStored = (list) => {
  list = list.sort((obj1, obj2) => parseInt(obj2.score, 10) - parseInt(obj1.score, 10));
  if (list.length === 0) { return; }
  for (let i = 0; i < list.length; i += 1) {
    postScore(list[i], i);
  }
};

export default loadStored;