function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setNumbers() {
  let num = getRandomInt(100);
  document.querySelector('#numberOfPacks').innerHTML = num;
  (num < 10) ? num = '00' + num : num = '0' + num;
  document.querySelector('.counter__digit_left').innerHTML = num[0];
  document.querySelector('.counter__digit_center').innerHTML = num[1];
  document.querySelector('.counter__digit_right').innerHTML = num[2];

}

function showPopup() {
  let popup = document.querySelector('.popup');
  popup.classList.add('popup_show');
}

function hidePopup() {
  let popup = document.querySelector('.popup');
  popup.classList.remove('popup_show');
}

window.onload = function() {
  setNumbers();
  var giftContainer = document.querySelector('.promo__gift');
  giftContainer.addEventListener('mouseenter', showPopup);
  giftContainer.addEventListener('mouseout', hidePopup);
}

