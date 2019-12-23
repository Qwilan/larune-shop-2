const model = function model() {};

const accounts = require('../../../json/accounts.json')

model.prototype.logout = () => {
  localStorage.clear();
};

model.prototype.isAuth = function() {
  const login = window.localStorage.getItem("login");
  const password = window.localStorage.getItem("password");
  const timestamp = window.localStorage.getItem("timestamp");

  const now = Date.now();

  if (now - timestamp > 3 * 60 * 60 * 1000) {
    this.logout();
    return false;
  }

  if (
    accounts.find(
      account =>
        account.login.toLowerCase() === login.toLowerCase() &&
        account.password.toLowerCase() === password.toLowerCase()
    )
  ) {
    return true;
  }

  return false;
};

model.prototype.auth = (login, password) => {
  if (
    accounts.find(
      account =>
        account.login.toLowerCase() === login.toLowerCase() &&
        account.password.toLowerCase() === password.toLowerCase()
    )
  ) {
    window.localStorage.setItem("login", login);
    window.localStorage.setItem("password", password);
    window.localStorage.setItem("timestamp", Date.now());

    return true;
  }

  return false;
};

export default model;
