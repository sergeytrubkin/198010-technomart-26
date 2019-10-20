// popup-cart
var cartLink = document.querySelectorAll(".catalog-items__buy");
var cartBookmark = document.querySelectorAll(".catalog-items__bookmarks");

var cartPopup = document.querySelector(".popup-cart");
var cartClose = document.querySelectorAll(".modal__close");

var bookmarkTab = document.querySelector(".header-top__item--bookmark");
var cartTab = document.querySelector(".header-top__item--cart");

// открытие попапа и активация вкладки "корзина"
for (var i = 0; i < cartLink.length; i++) {
  cartLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
    cartTab.classList.add("header-top__item--active");
  });
}

// закрытие попапа
for (var i = 0; i < cartClose.length; i++) {
  cartClose[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });
}

// активация вкладки "закладки"
for (var i = 0; i < cartBookmark.length; i++) {
  cartBookmark[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmarkTab.classList.add("header-top__item--active");
  });
}

// закрывается при нажатии на форму!!!
// cartPopup.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   cartPopup.classList.remove("modal-show");
// });
