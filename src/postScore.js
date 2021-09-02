const postScore = (score, i) => {
  const table = document.querySelector('div.leaderboard');
  const newDiv = document.createElement('div');
  newDiv.classList.add('py-2', 'px-2', 'score');
  if(i === 0){newDiv.classList.add('first');}
  if(i === 1){newDiv.classList.add('second');}
  if(i === 2){newDiv.classList.add('third');}
  newDiv.innerHTML = `
        <p><strong>${score.user}:</strong> ${score.score}</p>
    `;
  table.appendChild(newDiv);
};

export default postScore;