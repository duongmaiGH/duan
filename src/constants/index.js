import dangnhap from "../container/dangnhap";
import Login from "../container/Login";
import Quanlycongviec from "../container/Quanlycongviec";
import trangchu from "../container/Trangchu";

export const ADMIN_ROUTES = [
    {
      path : '/Trangchu',
      name : 'Trang Chủ',
      exact : true,
      component : trangchu,
    },
    {
      path : '/Quanlycongviec',
      name : 'Quản Lý Công Việc',
      exact : true,
      component : Quanlycongviec,
    },
  ];

  export const LOGIN_ROUTES = [
    {
      path : '/login',
      name : 'Đăng Nhập',
      exact : true,
      component : Login,
    },
    {
      path : '/dangnhap',
      name : 'Đăng Nhập',
      exact : true,
      component : dangnhap,
    },
  ];