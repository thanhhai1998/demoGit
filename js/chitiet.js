import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap';
import {NguoiDung} from '../models/nguoidung';
import '../css/chitiet.css';
import Swal from 'sweetalert2';
//import kiểu 3
import asdasd from '../models/nguoidung'; //đặt tên j cũng được asdasd..
asdasd.ht
function getParamsFromURL(){
    var params = window.location.search.substr(1,).split('=');
    console.log(params)
    var courseId = params[1];
}
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool'
  })
getParamsFromURL();