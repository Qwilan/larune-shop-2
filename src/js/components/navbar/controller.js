import { goRoute, getRoute } from "../../utils/routing";

const controller = function controller(view, model) {
  this.view = view;
  this.model = model;
};

controller.prototype.initialize = function initialize() {
  this.view.logout = this.logout.bind(this);
  this.view.goRoute = this.goRoute.bind(this);
  this.view.getRoute = this.getRoute.bind(this);
};

controller.prototype.getRoute = function() {
  return getRoute(window.location.hash);
};

controller.prototype.goRoute = function(route) {
  goRoute(route);
};

controller.prototype.logout = function test() {
  this.model.logout();
};

export default controller;
