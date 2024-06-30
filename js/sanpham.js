import userTemplate from "../views/user_template.html?raw";
import sanphampage from '../views/sanpham.html?raw';

export function sanpham() {
    document.getElementById("template").innerHTML = userTemplate;
    document.getElementById("app").innerHTML = sanphampage;
}