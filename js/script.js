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
var feedbackPopup = document.querySelector(".popup-feedback");

var feedbackLink = document.querySelector(".popup-open");
var feedbackClose = document.querySelector(".modal__close--feedback");

var feedbackName = document.querySelector("[name=name");
var feedbackMail = document.querySelector("[name=mail]");
var feedbackForm = document.querySelector(".modal-write-us");

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
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

// проверка формы на заполнение полей
// feedbackForm.addEventListener("submit", function(evt) {
//   if (!feedbackMail.value || !feedbackName.value) {
//     evt.preventDefault();
//     console.log("нужно заполнить все поля формы");
//   }
// });
