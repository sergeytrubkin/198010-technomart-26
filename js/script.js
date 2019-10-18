// map
var mapLink = document.querySelector(".map__link");
var mapClose = document.querySelector(".modal__close");
var mapPopup = document.querySelector(".popup-map");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

// poup-open (модальное окно обратной связи)
var feedbackOpen = document.querySelector(".popup-open");
var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = document.querySelector(".modal__close--feedback");

console.log(feedbackOpen);

feedbackOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

// закрывается модальное окно при нажатии на форму
// feedbackPopup.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   feedbackPopup.classList.remove("modal-show");
// });
