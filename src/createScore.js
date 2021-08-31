import Score from "./score";

const createScore = (player, score) => {
   return new Score(player, score);
}

export default createScore;