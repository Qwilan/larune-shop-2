const model = function model() {};

model.prototype.getInvoices = () => {
  let invoices = JSON.parse(window.localStorage.getItem("invoices"));
  if (!invoices) {
    invoices = [];
  }
  return [...invoices];
};

export default model;
