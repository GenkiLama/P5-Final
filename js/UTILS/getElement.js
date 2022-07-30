const colorInput = document.getElementById("colors");
const quantityInput = document.getElementById("quantity");
const addToCartBtn = document.getElementById("addToCart");
const homePageItems = document.getElementById("items");
const pageTitle = document.getElementsByTagName("title");
const productTitle = document.getElementById("title");
const itemImg = document.getElementsByClassName("item__img");
const itemPrice = document.getElementById("price");
const itemDescription = document.getElementById("description");
const itemColor = document.getElementById("colors");
const cartItemsContainer = document.getElementById("cart__items");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const adress = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");
const submitBtn = document.getElementById("order");
const clientOrderId = document.getElementById("orderId");
const badFormAdress = document.getElementById("addressErrorMsg");
const badFormEmail = document.getElementById("emailErrorMsg");
const badFormCity = document.getElementById("cityErrorMsg");
export {
  colorInput,
  quantityInput,
  addToCartBtn,
  homePageItems,
  pageTitle,
  productTitle,
  itemImg,
  itemPrice,
  itemDescription,
  itemColor,
  cartItemsContainer,
  firstName,
  lastName,
  adress,
  city,
  email,
  submitBtn,
  clientOrderId,
  badFormAdress,
  badFormEmail,
  badFormCity,
};
