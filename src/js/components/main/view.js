const view = function view(element) {
  this.element = element;
};

view.prototype.render = function render() {
  const goods = this.getGoods();

  this.element.innerHTML = `
	<div class="main">
		<div class="container">
			<div class="row" id="row">
			</div>
		</div>
	</div>
	`;

  goods.forEach(good => {
		if (good.count <= 0) {
			return;
		}
		const isInCart = !!this.getGoodFromCartById(good.id);
    const col = document.createElement("div");
    col.className = "col-md-3 col-sm-6 m-b-15 m-t-15";
    col.innerHTML = `
		<div class="product-grid4 ${isInCart ? "active" : ""}" id="grid-${good.id}">
			<div class="product-image4">
				<div>
					<img class="pic-1" src="${require("../../../images/" + good.img1)}" />
					<span class="product-discount-label">${good.count}</span>
				</div>
			</div>
			<div class="product-content">
				<h3 class="title">${good.name}</h3>
				<div class="price">${good.price}₽</div>
				<button class="add-to-cart" ${!good.count ? "hidden" : ""}>
					${isInCart ? "REMOVE FROM CART" : "ADD TO CART"}
				</button>
			</div>
		</div>
		`;

    const button = col.querySelector(".add-to-cart");
    button.onclick = () => {
      if (isInCart) {
        this.onRemoveGoodFromCart(good.id);
      } else {
        this.onAddGoodToCart(good.id);
      }
    };

    this.element.querySelector("#row").append(col);
  });
};

export default view;
