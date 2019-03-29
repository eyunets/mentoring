export function createCardElement(jsonCard) {
  var card = document.createElement('div');
  card.classList.add('card');
  var cardImg = document.createElement('div');
  cardImg.classList.add('card_img');
  var img = document.createElement('img');
  img.src = jsonCard.img;
  cardImg.append(img);
  var cardTitle = document.createElement('div');
  cardTitle.classList.add('card_title');
  cardTitle.innerHTML = jsonCard.title;
  var cardDescription = document.createElement('div');
  cardDescription.classList.add('card_description');
  var p = document.createElement('p');
  p.innerHTML = jsonCard.description;
  cardDescription.append(p);
  card.append(cardImg, cardTitle, cardDescription);
  return card;
}
