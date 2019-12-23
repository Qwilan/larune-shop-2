const model = function model() {};

model.prototype.getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  return [...cart];
};

model.prototype.setGoods = goods => {
  localStorage.setItem("goods", JSON.stringify(goods));
};

model.prototype.setCart = cart => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

model.prototype.clearCart = () => {
  localStorage.removeItem("cart");
};

model.prototype.getGoods = () => {
  return JSON.parse(window.localStorage.getItem("goods"));
};

model.prototype.getGoodById = id => {
  const goods = JSON.parse(window.localStorage.getItem("goods"));
  return goods.find(good => good.id === id);
};

model.prototype.updateGood = function(good) {
  const goods = this.getGoods();
  const index = goods.findIndex(x => x.id === good.id);

  if (index === -1) {
    return;
  }

  goods[index] = good;

  this.setGoods(goods);
};

model.prototype.getGoodFromCartById = function(id) {
  const cart = this.getCart();
  return cart.find(good => good.id === id);
};

model.prototype.removeGoodFromCart = function(id) {
  const cart = this.getCart();
  this.setCart(cart.filter(good => good.id !== id));
};

model.prototype.updateGoodInCart = function(good) {
  const cart = this.getCart();
  const index = cart.findIndex(goodInCart => goodInCart.id === good.id);

  if (index === -1) {
    return;
  }

  cart[index] = good;
  this.setCart(cart);
};

model.prototype.getInvoices = () => {
  let invoices = JSON.parse(window.localStorage.getItem("invoices"));
  if (!invoices) {
    invoices = [];
  }
  return [...invoices];
};

model.prototype.setInvoices = invoices => {
  localStorage.setItem("invoices", JSON.stringify(invoices));
};

model.prototype.addInvoice = function(invoice) {
  const invoices = this.getInvoices();
  invoices.push(invoice);
  this.setInvoices(invoices);
};

export default model;
