import adminTemp from "../views/admin_temp.html?raw";
import kh from '../views/qlkh.html?raw';

export function qlkh() {
    document.getElementById("template").innerHTML = adminTemp;
    document.getElementById("app").innerHTML = kh;
}