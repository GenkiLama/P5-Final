import { getData, getCurrentId } from "../DAL/data.js";

const url = "http://localhost:3000/api/products";
const items = await getData(url);
const itemId = getCurrentId();
const emailRegExp = new RegExp(
  "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
);
const nameRegExp = new RegExp("^[a-zA-Zàâäéèêëïîôöùûüç ,.'-]+$");
const adressRegExp = new RegExp("[[a-zA-Zàâäéèêëïîôöùûüç0-9 ,'-]+$");

export { url, items, itemId, emailRegExp, nameRegExp, adressRegExp };
