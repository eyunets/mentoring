function search(event) {
  var reg = new RegExp(event.value, 'i');
  var cards = document.getElementsByClassName('card');
  for (var i = cards.length - 1; i >= 0; i--) {
    var elements = cards[i];
    if (
      !reg.test(elements.getElementsByClassName('card_title')[0].innerHTML)
    ) {
      elements.style.opacity = 0;
      elements.style.flexGrow = 0.00001;
      elements.addEventListener('transitionend', function() {
        this.remove();
      });
    }
  }
}
function parseJSON(event) {
  var elementsents = event.files[0];
  var fr = new FileReader();
  fr.onload = function(e) {
    var result = JSON.parse(e.target.result);
    for (var i = 0; i < result.cards.length; i++) {
      var card = document.createElement('div');
      card.classList.add('card');
      var cardImg = document.createElement('div');
      cardImg.classList.add('card_img');
      var img = document.createElement('img');
      img.src = result.cards[i].img;
      cardImg.append(img);
      var cardTitle = document.createElement('div');
      cardTitle.classList.add('card_title');
      cardTitle.innerHTML = result.cards[i].title;
      var cardDescription = document.createElement('div');
      cardDescription.classList.add('card_description');
      var p = document.createElement('p');
      p.innerHTML = result.cards[i].description;
      cardDescription.append(p);
      card.append(cardImg, cardTitle, cardDescription);
      document.getElementsByClassName('cards')[0].append(card);
    }
  };
  event.value = null;
  fr.readAsText(elementsents);
}
