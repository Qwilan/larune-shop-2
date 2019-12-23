const model = function model() {};

model.prototype.logout = () => {
  localStorage.clear();
};

export default model;
