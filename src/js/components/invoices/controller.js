import { goRoute } from "../../utils/routing";

const controller = function controller(view, model) {
  this.view = view;
  this.model = model;
};

controller.prototype.initialize = function() {
  this.view.getInvoices = this.getInvoices.bind(this);
  this.view.goRoute = this.goRoute.bind(this);
};

controller.prototype.getInvoices = function() {
  return this.model.getInvoices();
};

controller.prototype.goRoute = function(route) {
  goRoute(route);
};

export default controller;
