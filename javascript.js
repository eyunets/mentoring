//document.addEventListener('DOMContentLoaded', search);

function search(event) {
  elem = event.value;
  reg = new RegExp(elem, 'i');
  var cards = document.getElementsByClassName('card');
  for (var i = cards.length - 1; i >= 0; i--) {
    elem = cards[i];
    if (!reg.test(elem.getElementsByClassName('card_title')[0].innerHTML)) {
      elem.style.opacity = 0;
      elem.style.flexGrow = 0.00001;
      elem.addEventListener('transitionend', function() {
        this.remove();
      });
    }
  }
}
function parseJSON(event) {
  elem = event.files[0];
  var fr = new FileReader();
  fr.onload = function(e) {
    var result = JSON.parse(e.target.result);
    for (var i = 0; i < result.cards.length; i++) {
      card = document.createElement('div');
      card.classList.add('card');
      cardImg = document.createElement('div');
      cardImg.classList.add('card_img');
      img = document.createElement('img');
      img.src = result.cards[i].img;
      cardImg.append(img);
      card.append(cardImg);
      cardTitle = document.createElement('div');
      cardTitle.classList.add('card_title');
      cardTitle.innerHTML = result.cards[i].title;
      card.append(cardTitle);
      cardDescription = document.createElement('div');
      cardDescription.classList.add('card_description');
      p = document.createElement('p');
      p.innerHTML = result.cards[i].description;
      cardDescription.append(p);
      card.append(cardDescription);
      document.getElementById('cards').append(card);
    }
   console.log(event);
  };
  event.value = null;
  fr.readAsText(elem);
}
