import url from './game.js';

const create = async (user, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  const data = await response.json();
  return data;
};

export default create;