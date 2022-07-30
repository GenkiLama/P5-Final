import { getCart, updateCart , deleteItem } from "./DAL/localstorage.js";
import { renderCartItems, displayTotalCost } from "./LAYOUT/renderUi.js";
import {
  validateAdress,
  validateName,
  validateEmail,
  sendOrder,
} from "./DAL/form.js";
import {
  cartItemsContainer,
  firstName,
  lastName,
  adress,
  city,
  email,
  submitBtn,
} from "./UTILS/getElement.js";

cartItemsContainer.addEventListener("change", updateCart);
cartItemsContainer.addEventListener("click", deleteItem);
submitBtn.addEventListener("click", sendOrder);
firstName.addEventListener("keyup", validateName);
lastName.addEventListener("keyup", validateName);
city.addEventListener("keyup", validateName);
adress.addEventListener("keyup", validateAdress);
email.addEventListener("keyup", validateEmail);

renderCartItems(getCart());
displayTotalCost();
