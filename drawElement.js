import { search } from './search.js';
import { createCardElement } from './createCardElement';
import { parseJSON } from './parseJSON';
function drawElement(event) {
  var cardsContainer = document.getElementsByClassName('cards');
  cardsContainer[0].innerHTML = '';
  var elements = search(event.target.value);
  if (elements.length) {
    for (var i = 0; i < elements.length; i++) {
      var card = createCardElement(elements[i]);
      document.getElementsByClassName('cards')[0].append(card);
    }
  }
}

window.onload = e => {
  setUpSearchField(e);
  setUpInputField(e);
};

function setUpSearchField(e) {
  const searchField = e.target.querySelector('.card_search');
  searchField.addEventListener('change', e => {
    drawElement(e);
  });
}
function setUpInputField(e) {
  const input = document.querySelector('.parseJSON');
  input.addEventListener('change', e => {
    parseJSON(e);
  });
}
export default {
  drawElement: drawElement,
  parseJSON: parseJSON,
  search: search,
  createCardElement: createCardElement
};
