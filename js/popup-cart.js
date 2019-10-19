// popup-cart
var cartLink = document.querySelectorAll(".catalog-items__buy");
var cartPopup = document.querySelector(".popup-cart");
var cartClose = document.querySelector(".modal__close");

console.log(cartLink);

for (var i = 0; i < cartLink.length; i++) {
  cartLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}

cartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

// закрывается при нажатии на форму!!!
// cartPopup.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   cartPopup.classList.remove("modal-show");
// });
