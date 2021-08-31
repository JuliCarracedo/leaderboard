const postScore = (score) => {
  const table = document.querySelector('div.leaderboard');
  const newDiv = document.createElement('div');
  newDiv.classList.add('my-1', 'mx-2');
  newDiv.innerHTML = `
        <p><strong>${score.player}:</strong> ${score.score}</p>
        <hr>
    `;
  table.appendChild(newDiv);
};

export default postScore;