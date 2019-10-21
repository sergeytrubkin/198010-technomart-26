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

// закрытие формы по esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

// poup-open (модальное окно обратной связи)
var feedbackPopup = document.querySelector(".popup-feedback");

var feedbackLink = document.querySelector(".popup-open");
var feedbackClose = document.querySelector(".modal__close--feedback");

var feedbackName = document.querySelector("[name=name");
var feedbackMail = document.querySelector("[name=email]");
var feedbackText = document.querySelector("[name=text]");
var feedbackForm = document.querySelector(".modal-write-us");

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackForm.classList.remove("modal--error");
});

// проверка формы на заполнение полей
feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackMail.value || !feedbackName.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal--error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal--error");
  }
});

// закрытие формы по esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackForm.classList.remove("modal--error");
    } else if (feedbackPopup.classList.contains("popup-error")) {
      feedbackPopup.classList.remove("popup-error");
      feedbackForm.classList.remove("modal--error");
    }
  }
});

// закрывается модальное окно при нажатии на форму
// feedbackPopup.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   feedbackPopup.classList.remove("modal-show");
// });
