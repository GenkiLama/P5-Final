import { itemId } from "../UTILS/const.js";
import {
  colorInput,
  quantityInput,
  addToCartBtn,
} from "../UTILS/getElement.js";
import { renderCartItems, displayTotalCost } from "../LAYOUT/renderUi.js";

function saveCart(cart) {
  localStorage.setItem("aCart", JSON.stringify(cart));
}

function clearCart() {
  localStorage.clear();
}

function getCart() {
  return JSON.parse(localStorage.getItem("aCart")) || [];
}

function addItemToCart() {
  let myItem = {
    id: itemId,
    color: colorInput.value,
    quantity: parseInt(quantityInput.value, 10),
  };
  const { id, color, quantity } = myItem;
  if (!myItem.color || myItem.quantity <= 0) {
    window.alert("pick a color and a quantity please");
  } else {
    const cart = getCart();
    const existingItem = cart.find(
      (item) => item.id == id && item.color == color
    );
    if (existingItem) {
      existingItem.quantity = parseInt(existingItem.quantity, 10);
      existingItem.quantity += quantity;
    } else {
      cart.push(myItem);
    }
    saveCart(cart);
    addToCartBtn.innerText = "Produit ajouté au panier";
  }
}

function updateCart(event) {
  if (event.target.nodeName.toLowerCase() !== "input") {
    return;
  }
  const itemId = event.target.dataset.id;
  const itemColor = event.target.dataset.color;
  const cart = getCart().map((item) => {
    if (item.id === itemId && item.color === itemColor) {
      return { ...item, quantity: parseInt(event.target.value, 10) };
    } else {
      return { ...item };
    }
  });
  saveCart(cart);
  renderCartItems(getCart());
  displayTotalCost();
}

function deleteItem(event) {
  const parentElement = event.target.closest("section > article");
  const parentElement__dataId = parentElement.getAttribute("data-id");
  const parentElement__dataColor = parentElement.getAttribute("data-color");
  if (!event.target.classList.contains("deleteItem")) {
    return;
  }
  const filtered = getCart().filter(
    (item) =>
      (item.id && item.color) !==
      (parentElement__dataId && parentElement__dataColor)
  );
  saveCart(filtered);
  renderCartItems(getCart());
  displayTotalCost();
}
export { saveCart, clearCart, getCart, addItemToCart, updateCart, deleteItem };
