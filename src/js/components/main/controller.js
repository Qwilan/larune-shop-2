const controller = function controller(view, model) {
  this.view = view;
  this.model = model;
};

controller.prototype.initialize = function initialize() {
  this.model.initializeGoods();
  this.view.getGoods = this.getGoods.bind(this);
  this.view.onAddGoodToCart = this.onAddGoodToCart.bind(this);
  this.view.onRemoveGoodFromCart = this.onRemoveGoodFromCart.bind(this);
  this.view.getGoodFromCartById = this.getGoodFromCartById.bind(this);
};

controller.prototype.getGoods = function getGoods() {
  const goods = this.model.getGoods();
  return goods;
};

controller.prototype.getGoodById = function getGoodById(id) {
  return this.model.getGoodById(id);
};

controller.prototype.getGoodFromCartById = function getGoodFromCartById(id) {
  return this.model.getGoodFromCartById(id);
};

controller.prototype.onAddGoodToCart = function onAddGoodToCart(id) {
  this.model.addGoodToCart(id);
  document.dispatchEvent(new CustomEvent("renderMain"));
  document.dispatchEvent(new CustomEvent("renderCart"));
};

controller.prototype.onRemoveGoodFromCart = function onRemoveGoodFromCart(id) {
  this.model.removeGoodFromCart(id);
  document.dispatchEvent(new CustomEvent("renderMain"));
  document.dispatchEvent(new CustomEvent("renderCart"));
};

export default controller;
