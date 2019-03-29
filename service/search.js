import { getArray } from '../data/parsedArray.js';
export function search(name) {
  var reg = new RegExp(name, 'i');
  var cards = getArray();
  var filteredResult = cards.filter(function(card) {
    return reg.test(card.title);
  });
  return filteredResult;
}
