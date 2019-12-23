import "./styles/index.scss";
import { LoginModel, LoginView, LoginController } from "./js/components/login";
import { MainModel, MainView, MainController } from "./js/components/main";
import {
  NavbarModel,
  NavbarView,
  NavbarController
} from "./js/components/navbar";
import { CartModel, CartView, CartController } from "./js/components/cart";
import {
  InvoicesModel,
  InvoicesView,
  InvoicesController
} from "./js/components/invoices";
import { getRoute, goRoute } from "./js/utils/routing";
import { Routes } from "./js/constants/routing";

const init = () => {
  const route = getRoute(window.location.hash);
  let isAuth = false;

  const app = document.querySelector("#root");
  app.innerHTML = "";

  const login = document.createElement("div");

  const loginModel = new LoginModel();
  const loginView = new LoginView(login);
  const loginController = new LoginController(loginView, loginModel);

  loginController.initialize();
  loginView.render();

  app.append(login);

  isAuth = loginController.onIsAuthCheck();

  if (!isAuth) {
    goRoute(Routes.login);
  }

  if (isAuth) {
    const navbar = document.createElement("div");

    const navbarModel = new NavbarModel();
    const navbarView = new NavbarView(navbar);
    const navbarController = new NavbarController(navbarView, navbarModel);

    navbarController.initialize();
    navbarView.render();

    app.append(navbar);

    if (route === Routes.main) {
      const main = document.createElement("div");

      const mainModel = new MainModel();
      const mainView = new MainView(main);
      const mainController = new MainController(mainView, mainModel);

      mainController.initialize();
      mainView.render();

      document.addEventListener("renderMain", () => mainView.render());
      app.append(main);

      const cart = document.createElement("div");

      const cartModel = new CartModel();
      const cartView = new CartView(cart);
      const cartController = new CartController(cartView, cartModel);

      cartController.initialize();
      cartView.render();

      document.addEventListener("renderCart", () => cartView.render());
      app.append(cart);

      return;
    }

    if (route === Routes.invoices) {
      const invoices = document.createElement("div");

      const invoicesModel = new InvoicesModel();
      const invoicesView = new InvoicesView(invoices);
      const invoicesController = new InvoicesController(
        invoicesView,
        invoicesModel
      );

      invoicesController.initialize();
      invoicesView.render();

      app.append(invoices);

      return;
    }
  }
};

init();

document.addEventListener("init", init);
