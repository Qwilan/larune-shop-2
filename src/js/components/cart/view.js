const view = function view(element) {
  this.element = element;
};

view.prototype.render = function render() {
  const cart = this.getCart();
  const sum = cart.reduce((acc, good) => acc + good.count * good.price, 0);

  this.element.innerHTML = `
	<div id="cart" class="cart">
		<div class="container mb-4">
			<div class="row">
				<div class="col-12">
					<div id="table-div" class="table-responsive"></div>
				</div>
				<div class="col mb-2">
					<div class="row">
						<div id="cart-checkout-container" class="col-sm-12 col-md-6 text-right">
							<button
								id="cart-checkout"
								class="${!sum ? "disabled " : " "}btn btn-lg btn-block my-btn text-uppercase"
								${!sum ? "disabled" : ""}
							>
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`;

  const checkoutButton = this.element.querySelector("#cart-checkout");
  checkoutButton.onclick = this.onCheckout.bind(this);

  const table = document.createElement("table");
  table.className = "table table-striped";
  table.innerHTML = `
		<thead>
			<tr>
				<th scope="col"> </th>
				<th scope="col">Product</th>
				<th scope="col">Available</th>
				<th scope="col">Quantity</th>
				<th scope="col">Price</th>
				<th width="10%"></th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	`;

  const tableDiv = this.element.querySelector("#table-div");
  tableDiv.append(table);

  cart.forEach(goodFromCart => {
    const good = this.getGoodById(goodFromCart.id);
    const count =
      goodFromCart.count <= good.count ? goodFromCart.count : good.count;

    const tr = document.createElement("tr");
    tr.className = "cart-tr";
    tr.innerHTML = `
		<td>
			<img src="${require(`../../../images/${goodFromCart.img1}`)}"/>
		</td>
		<td>
			${goodFromCart.name}
		</td>
		<td>
			${goodFromCart.count}
		</td>
		<td>
			<input
				id="cart-quantity-${goodFromCart.id}"
				value="${count}"
				class="form-control"
				type="number"
			></input>
		</td>
		<td>
			${goodFromCart.price} ₽
		</td>
		<td class="text-right">
			<button id="remove-${goodFromCart.id}" class="btn btn-sm btn-danger">
				<i class="fa fa-trash"></i>
			</button>
		</td>
		`;

    const quantityInput = tr.querySelector(`#cart-quantity-${goodFromCart.id}`);
    quantityInput.onclick = e => e.target.select();
    quantityInput.onblur = (e =>
      this.onQuantityChange(
        e.target.value,
        goodFromCart.id,
        quantityInput
      )).bind(this);

    const removeButton = tr.querySelector(`#remove-${goodFromCart.id}`);
    removeButton.onclick = () => this.onRemoveGoodFromCart(goodFromCart.id);

    this.element.querySelector("tbody").append(tr);
  });
};

export default view;
