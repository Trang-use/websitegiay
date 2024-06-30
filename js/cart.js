import userTemplate from "../views/user_template.html?raw";
import cartpage from '../views/cart.html?raw';

export function cart() {
    document.getElementById("template").innerHTML = userTemplate;
    document.getElementById("app").innerHTML = cartpage;
}