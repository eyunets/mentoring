import { setArray } from '../data/parsedArray.js';
export function parseJSON(event) {
  return new Promise(resolve => {
    var result;
    var elements = event.target.files[0];
    var fr = new FileReader();
    fr.onload = function(e) {
      result = JSON.parse(e.target.result);
      setArray(result.cards);
      resolve(result);
    };
    fr.readAsText(elements);
  });
}
