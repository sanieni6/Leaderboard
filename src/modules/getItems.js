import url from './game.js';

const get = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const sorted = await data.result.sort((a, b) => b.score - a.score);
  return sorted;
};

export default get;