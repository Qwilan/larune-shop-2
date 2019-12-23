import { goRoute } from "../../utils/routing";
import { Routes } from "../../constants/routing";

const controller = function controller(view, model) {
  this.view = view;
  this.model = model;
};

controller.prototype.initialize = function initialize() {
  this.view.onLoginClick = this.onLoginClick.bind(this);
  this.view.onFieldFocus = this.onFieldFocus.bind(this);
  this.view.onIsAuthCheck = this.onIsAuthCheck.bind(this);
};

controller.prototype.onIsAuthCheck = function onIsAuthCheck() {
  if (this.model.isAuth()) {
    return true;
  }
  return false;
};

controller.prototype.onLoginClick = function onLoginClick(e) {
  e.preventDefault();
  const loginWrap = document.getElementById("login-wrap");
  const passwordWrap = document.getElementById("password-wrap");
  const loginInput = document.getElementById("login");
  const passwordInput = document.getElementById("password");
  const login = loginInput.value.toLowerCase();
  const password = passwordInput.value.toLowerCase();

  const isAuth = this.model.auth(login, password);

  if (!isAuth) {
    if (!login.trim()) {
      loginWrap.dataset.validate = "Username is required";
    } else {
      loginWrap.dataset.validate = "Wrong username or password";
    }
    if (!password.trim()) {
      passwordWrap.dataset.validate = "Password is required";
    } else {
      passwordWrap.dataset.validate = "Wrong username or password";
    }
    loginWrap.classList.add("alert-validate");
    passwordWrap.classList.add("alert-validate");
  } else {
    goRoute(Routes.main);
  }
};

controller.prototype.onFieldFocus = function onFieldFocus(field) {
  field.classList.remove("alert-validate");
};

export default controller;
