import $ from 'jquery';

export function NguoiDung(taiKhoan,matKhau,hoTen,email,soDT,mlnd){
    this.TaiKhoan = taiKhoan;
    this.MatKhau = matKhau;
    this.HoTen = hoTen;
    this.Email = email;
    this.SoDT = soDT;
    this.MaLoaiNguoiDung = mlnd;
}

//kiểu exports thứ 3
var hoTen="asdasd";
module.exports = {
    ND:NguoiDung,
    ht:hoTen,
}