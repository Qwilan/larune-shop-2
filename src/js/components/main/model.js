const model = function model() {};

const data = require('../../../json/goods.json');

model.prototype.initializeGoods = () => {
  const localGoods = JSON.parse(localStorage.getItem('goods'));
  if (localGoods) {
    return;
  }
  const goods = [...data];
  window.localStorage.setItem("goods", JSON.stringify(goods));
};

model.prototype.getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  return [...cart];
};

model.prototype.setCart = cart => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

model.prototype.getGoods = () => {
  return JSON.parse(window.localStorage.getItem("goods"));
};

model.prototype.getGoodById = id => {
  const goods = JSON.parse(window.localStorage.getItem("goods"));
  return goods.find(good => good.id === id);
};

model.prototype.getGoodFromCartById = function(id) {
  const cart = this.getCart();
  return cart.find(good => good.id === id);
};

model.prototype.addGoodToCart = function(id) {
  const good = this.getGoodById(id);
  const cart = this.getCart();
  const newGood = { ...good, count: 1 };
  cart.push(newGood);
  this.setCart(cart);
};

model.prototype.removeGoodFromCart = function(id) {
  const cart = this.getCart();
  this.setCart(cart.filter(good => good.id !== id));
};

export default model;
