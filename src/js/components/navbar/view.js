import { Routes } from "../../constants/routing";

const view = function view(element) {
  this.element = element;
};

view.prototype.render = function render() {
  const route = this.getRoute();

  this.element.innerHTML = `
	<nav class="navbar navbar-expand-md navbar-dark bg-dark">
		<div class="container">
			<a class="navbar-brand" id="logo" href="#">Larune's shop</a>

			<div class="navbar justify-content-end">
				<ul class="navbar-nav">
          <li
            id="nav-home"
            class="${route === Routes.main ? "active " : ""}nav-item"
          >
						<a class="nav-link" href="#">Home</a>
					</li>
          <li
            id="nav-invoices"
            class="${route === Routes.invoices ? "active " : ""}nav-item"
          >
						<a class="nav-link" href="#">Invoices <span class="sr-only">(current)</span></a>
					</li>
				</ul>

				<form class="nav-form form-inline my-2 my-lg-0">
					<a class="btn btn-light btn-sm ml-3" href="" id="logout-btn">
						<i class="fa fa-sign-out"></i> logout
					</a>
				</form>
			</div>
		</div>
	</nav>
	`;

  const logoutButton = this.element.querySelector("#logout-btn");
  logoutButton.onclick = e => {
    e.preventDefault();
    this.logout();
    document.location.reload(true);
  };

  const invoicesButton = this.element.querySelector("#nav-invoices");
  invoicesButton.onclick = e => {
    e.preventDefault();
    this.goRoute(Routes.invoices);
  };

  const homeButton = this.element.querySelector("#nav-home");
  homeButton.onclick = e => {
    e.preventDefault();
    this.goRoute(Routes.main);
  };

  const logoButton = this.element.querySelector("#logo");
  logoButton.onclick = e => {
    e.preventDefault();
    this.goRoute(Routes.main);
  };
};

export default view;
