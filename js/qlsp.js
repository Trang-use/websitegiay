import adminTemp from "../views/admin_temp.html?raw";
import sp from '../views/qlsp.html?raw';
import them from '../views/themsp.html?raw';

export function qlsp() {
    document.getElementById("template").innerHTML = adminTemp;
    document.getElementById("app").innerHTML = sp;
}
export function themsp() {
    document.getElementById("template").innerHTML = adminTemp;
    document.getElementById("app").innerHTML = them;
}