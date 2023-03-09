// eslint-disable-next-line
import _ from 'lodash';
import './style.scss';
import get from './modules/getItems.js';
import item from './modules/generateItem.js';
import create from './modules/createItem.js';

const submitBtn = document.querySelector('.form');
const name = document.querySelector('.name');
const score = document.querySelector('.score');
const ulElement = document.querySelector('.scores-list');
const refreshButton = document.querySelector('.refresh');
const spanMessage = document.querySelector('.message');

const displayMessage = (message) => {
  message.then((response) => {
    spanMessage.textContent = response.result;
  });
  setTimeout(() => {
    spanMessage.textContent = '';
  }, 4000);
};

const generateList = () => {
  ulElement.innerHTML = '';
  get().then((data) => {
    data.forEach((element) => {
      ulElement.appendChild(item(element.user, element.score));
    });
  });
};

submitBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  displayMessage(create(name.value, score.value));
  name.value = '';
  score.value = '';
  setTimeout(() => {
    generateList();
  }, 2000);
});

refreshButton.addEventListener('click', () => {
  generateList();
});

window.onload = generateList;
