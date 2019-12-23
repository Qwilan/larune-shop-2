import { newGuid } from "../../utils";
import { goRoute } from "../../utils/routing";
import { Routes } from "../../constants/routing";

const controller = function controller(view, model) {
  this.view = view;
  this.model = model;
};

controller.prototype.initialize = function initialize() {
  this.view.getCart = this.getCart.bind(this);
  this.view.getGoods = this.getGoods.bind(this);
  this.view.getGoodById = this.getGoodById.bind(this);
  this.view.getGoodFromCartById = this.getGoodFromCartById.bind(this);
  this.view.onRemoveGoodFromCart = this.onRemoveGoodFromCart.bind(this);
  this.view.onQuantityChange = this.onQuantityChange.bind(this);
  this.view.onCheckout = this.onCheckout.bind(this);
};

controller.prototype.getCart = function() {
  return this.model.getCart();
};

controller.prototype.getGoods = function() {
  const goods = this.model.getGoods();
  return goods;
};

controller.prototype.getGoodById = function(id) {
  return this.model.getGoodById(id);
};

controller.prototype.getGoodFromCartById = function(id) {
  return this.model.getGoodFromCartById(id);
};

controller.prototype.onRemoveGoodFromCart = function(id) {
  this.model.removeGoodFromCart(id);
  document.dispatchEvent(new CustomEvent("renderMain"));
  document.dispatchEvent(new CustomEvent("renderCart"));
};

controller.prototype.onQuantityChange = function(count, id, input) {
  const good = this.getGoodById(id);
  const goodFromCart = this.getGoodFromCartById(id);

  if (good.count < count) {
    input.value = good.count;
    count = good.count;
  }

  goodFromCart.count = count;

  this.model.updateGoodInCart(goodFromCart);
};

controller.prototype.onCheckout = function Checkout() {
  const cart = this.getCart();

  const invoice = {
    id: newGuid(),
    date: new Date(),
    goods: [...cart]
  };

  cart.forEach(goodFromCart => {
    const good = this.getGoodById(goodFromCart.id);
    good.count -= goodFromCart.count;
    this.model.updateGood(good);
    this.model.clearCart();
  });

  this.model.addInvoice(invoice);
  goRoute(Routes.invoices);
  window.scrollTo(0, 0);
};

export default controller;
