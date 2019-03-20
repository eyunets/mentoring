document.addEventListener('DOMContentLoaded', ready);

function search(event) {
  elem = event.value;
  reg = new RegExp(elem, 'i');
  console.log(elem);
  cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
    console.log(cards[i].getElementsByClassName('card_title')[0].innerHTML);
    console.log(reg);
    console.log(
      reg.test(cards[i].getElementsByClassName('card_title')[0].innerHTML)
    );
    if (!reg.test(cards[i].getElementsByClassName('card_title')[0].innerHTML)) {
      cards[i].style.visibility = 'hidden';
    }
    if (reg.test(cards[i].getElementsByClassName('card_title')[0].innerHTML)) {
      cards[i].style.visibility = 'visible';
    }
  }
}

function ready() {
  form = document.getElementById('test');
  form.onclick = function(event) {
    console.log(document);
    console.log(form);
    event.target.style.backgroundColor = 'yellow';

    alert('target = ' + event.target.tagName + ', this=' + this.tagName);

    event.target.style.backgroundColor = '';
  };
}
