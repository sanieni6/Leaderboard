const item = (name, score) => {
  const element = document.createElement('li');
  element.classList.add('li-element');
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', `
        <h4 class="name">${name}: ${score}</h4>
    `);
  return element;
};

export default item;