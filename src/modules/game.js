const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/F5uy5K2m1J7n0h9Hrvgq/scores/';

// eslint-disable-next-line no-unused-vars
const game = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'fulbito',
    }),
  });
  const data = await response.json();
  return data;
};
export default url;
