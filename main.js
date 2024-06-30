import './style.css';
import Navigo from 'navigo'; // When using ES modules.
import { home } from "./js/home.js";
import { cart } from "./js/cart.js";
import { sanpham } from "./js/sanpham.js";
import  DanhMuc from "./js/danhmuc.js";
import { qlsp, themsp } from "./js/qlsp.js";
import { qldm } from "./js/qldm.js";
import { qlkh } from "./js/qlkh.js";
import chucnangadmin from './js/quanly_admin.js';
import Home from './js/chucnang.js';
const router = new Navigo('/');
router.on('/', function () {
  home()
  Home.all()
  Home.showsp()
})
.on('/sanpham', function () {
  sanpham();
  Home.all()
  Home.showallsp()
})
.on('/cart', function () {
  cart();
  Home.all();
})
.on('/admin', function () {
  qlsp()
  chucnangadmin.getAPI_admin()
})
.on('/admin/danhmuc', function () {
  // Render html
  qldm()
  // Lay data
  DanhMuc.all();
})
.on('/admin/khachhang', function () {
  qlkh()
})
.on('/admin/themsp', function () {
  themsp()
})
router.resolve();