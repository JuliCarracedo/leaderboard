const postToAPI = async (score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3IGjFzzBEY0MX1krdUtm/scores/', {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default postToAPI;