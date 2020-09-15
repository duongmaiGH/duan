import Login from "../container/Login";
import dashboard from "../container/dashboard";

export const menuId = 'primary-search-account-menu';

export const ADMIN_ROUTES = [
    {
      path : '/',
      name : 'Đăng Nhập',
      exact : true,
      component : Login,
    },
    {
      path : '/Dashboard',
      name : 'Dashboard',
      exact : true,
      component : dashboard,
    }
  ];