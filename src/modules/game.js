const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/F5uy5K2m1J7n0h9Hrvgq/scores/';

// eslint-disable-next-line no-unused-vars
const game = async () => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'fulbito',
    }),
  };
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', config);
  const data = await res.json();
  return data;
};
export default url;
