import { Routes } from "../../constants/routing";

const view = function view(element) {
  this.element = element;
};

view.prototype.render = function render() {
  const invoices = this.getInvoices();

  this.element.innerHTML = `<div id="invoices" class="container m-t-30 m-b-30"></div>`;

  const invoicesDiv = this.element.querySelector("#invoices");

  const col = document.createElement("div");
  col.className = "col mb-2";
  col.innerHTML = `
	<div class="col mb-2">
		<div class="row">
			<div class="col-sm-12  col-md-6">
				<button id="invoices-continue" class="btn btn-lg btn-block btn-light">
					Continue Shopping
				</button>
			</div>
		</div>
	</div>
	`;

  const continueButton = col.querySelector("#invoices-continue");
  continueButton.onclick = () => this.goRoute(Routes.main);

  invoices.forEach(invoice => {
    const sum = invoice.goods.reduce(
      (acc, good) => acc + good.count * good.price,
      0
    );
    const invoiceDiv = document.createElement("div");
    invoiceDiv.className = "m-t-30 m-b-30";
    invoiceDiv.innerHTML = `
		<div class="card">
			<div class="card-body p-0">
				<div class="row p-5">
					<div class="col-md-12">
						<table class="table">
							<thead>
								<tr>
									<th class="border-0 text-uppercase small font-weight-bold">ID</th>
									<th class="border-0 text-uppercase small font-weight-bold">Item</th>
									<th class="border-0 text-uppercase small font-weight-bold">Quantity</th>
									<th class="border-0 text-uppercase small font-weight-bold">Unit Cost</th>
									<th class="border-0 text-uppercase small font-weight-bold">Total</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</div>
				<div class="d-flex flex-row-reverse bg-dark text-white p-4">
					<div class="py-3 px-5 text-right">
						<div class="mb-2">Total amount</div>
						<div class="h2 font-weight-light">${sum} ₽</div>
					</div>
				</div>
			</div>
		</div>
		`;

    invoice.goods.forEach(good => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
				<td>${good.id}</td>
				<td>${good.name}</td>
				<td>${good.count}</td>
				<td>${good.price}</td>
				<td>${good.price * good.count} ₽</td>
			`;

      invoiceDiv.querySelector("tbody").append(tr);
    });

    invoicesDiv.append(invoiceDiv);
  });

  invoicesDiv.append(col);
};

export default view;
