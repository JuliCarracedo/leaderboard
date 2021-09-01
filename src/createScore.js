import Score from './score.js';

const createScore = (user, score) => new Score(user, score);

export default createScore;