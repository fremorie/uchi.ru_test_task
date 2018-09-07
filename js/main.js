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



window.onload = function() {
  setNumbers();
  let giftContainer = document.querySelector('.promo__gift');
  let popup = document.querySelector('.popup');

  function showPopup() {
    clearTimeout(popup.timer);
    popup.classList.add('popup_show');
  }

  function hidePopup() {
    popup.classList.remove('popup_show');
  }


  function startHidingPopup() {
    clearTimeout(popup.timer);
    popup.timer = setTimeout(hidePopup, 0);
  }

  function cancelHidingPopup() {
    clearTimeout(popup.timer);
  }

  giftContainer.addEventListener('mouseenter', showPopup);
  giftContainer.addEventListener('mouseleave', startHidingPopup);

  popup.addEventListener('mouseenter', cancelHidingPopup);
  popup.addEventListener('mouseleave', startHidingPopup);

}
