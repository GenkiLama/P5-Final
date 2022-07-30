import {
  homePageItems,
  pageTitle,
  productTitle,
  itemImg,
  itemPrice,
  itemDescription,
  itemColor,
  cartItemsContainer,
} from "../UTILS/getElement.js";
import { items } from "../UTILS/const.js";
import { getCart } from "../DAL/localstorage.js ";

function renderHomepageItems(items) {
  homePageItems.innerHTML = items
    .map((item) => {
      const { _id, imageUrl, altTxt, name, description } = item;
      return `
         <a href="./product.html?id=${_id}">
         <article>
               <img src="${imageUrl}" alt="${altTxt}">
               <h3 class="productName">${name}</h3>
               <p class="productDescription">${description}</p>
             </article>
         </a>
         `;
    })
    .join(" ");
}

function renderSpecificPageItem(item) {
  const { altTxt, colors, description, imageUrl, name, price } = item;
  pageTitle[0].innerText = name;
  itemImg[0].innerHTML = `<img src="${imageUrl}" alt="${altTxt}">`;
  productTitle.innerText = name;
  itemPrice.innerText = price;
  itemDescription.innerText = description;
  const colorOptions = colors
    .map((color) => {
      return `<option value="${color}">${color}</option>`;
    })
    .join(" ");
  itemColor.innerHTML = `<option value="">--SVP, choisissez une couleur --</option> ${colorOptions}`;
}

function renderCartItems(itemCart) {
  cartItemsContainer.innerHTML = itemCart
    .map((item) => {
      const { id, color, quantity } = item;
      const getDetails = items.find((a) => a._id === item.id);
      const { imageUrl, altTxt, name, price } = getDetails;
      return `
          <article class="cart__item" data-id="${id}" data-color="${color}">
          <div class="cart__item__img">
            <img src="${imageUrl}" alt="${altTxt}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>${name}</h2>
              <p>${color}</p>
              <p class="itemPrice">${price * quantity} Euros</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input data-id="${id}" data-color="${color}" type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>
          `;
    })
    .join(" ");
}

function displayTotalCost() {
  let itemQuantity = 0;
  let totalPrice = 0;
  getCart().map((item) => {
    itemQuantity += item.quantity;
    const itemId = item.id;
    const itemPrice = items.find((item) => itemId === item._id).price;
    totalPrice += item.quantity * itemPrice;
  });
  document.getElementById(
    "totalQuantity"
  ).parentElement.innerHTML = `Total (<span id="totalQuantity">${itemQuantity}</span> ${
    itemQuantity > 1 ? "articles" : "article"
  }) : <span id="totalPrice">${totalPrice}</span> €`;
}

export {
  renderHomepageItems,
  renderSpecificPageItem,
  renderCartItems,
  displayTotalCost
};
