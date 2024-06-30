import adminTemp from "../views/admin_temp.html?raw";
import dm from '../views/qldm.html?raw';

export function qldm() {
    document.getElementById("template").innerHTML = adminTemp;
    document.getElementById("app").innerHTML = dm;
}