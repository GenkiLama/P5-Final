import { items } from "./UTILS/const.js";
import { addItemToCart } from "./DAL/localstorage.js";
import { renderSpecificPageItem } from "./LAYOUT/renderUi.js";
import { quantityInput, addToCartBtn } from './UTILS/getElement.js'

quantityInput.setAttribute("value", 1);
addToCartBtn.addEventListener("click", addItemToCart);

renderSpecificPageItem(items);

