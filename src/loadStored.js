import postScore from './postScore.js';

const loadStored = (list) => {
  if (list.length === 0) { return; }
  for (let i = 0; i < list.length; i += 1) {
    postScore(list[i]);
  }
};

export default loadStored;