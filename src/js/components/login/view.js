const view = function view(element) {
  this.element = element;
};

view.prototype.render = function render() {
  this.element.innerHTML = "";

  if (this.onIsAuthCheck()) {
    return;
  }

  this.element.innerHTML = `
  <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-50 p-b-90">
				<form class="login100-form validate-form flex-sb flex-w"x>
					<span class="login100-form-title p-b-51">
						Login
					</span>
					<div id='login-wrap' class="wrap-input100 validate-input m-b-16">
						<input class="input100" type="text" id="login" name="login" placeholder="Username">
						<span class="focus-input100"></span>
					</div>
					<div id='password-wrap' class="wrap-input100 validate-input m-b-16">
						<input class="input100" type="password" id="password" name="password" placeholder="Password">
						<span class="focus-input100"></span>
					</div>
					<div class="container-login100-form-btn m-t-17">
						<button id="login-button" class="login100-form-btn" type="button">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
  `;

  const loginButton = this.element.querySelector("#login-button");
  loginButton.onclick = this.onLoginClick.bind(this);

  const loginField = this.element.querySelector("#login");
  loginField.onclick = () =>
    this.onFieldFocus(this.element.querySelector("#login-wrap"));

  const passwordField = this.element.querySelector("#password");
  passwordField.onclick = () =>
    this.onFieldFocus(this.element.querySelector("#password-wrap"));
};

export default view;
