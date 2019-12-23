export const goRoute = route => {
  if (!route && route != "") return;

  const prevRoute = getRoute(window.location.hash);

  if (prevRoute == route) {
    return;
  }

  window.location.href = window.location.pathname + getHash(route);
  document.dispatchEvent(new CustomEvent("init"))
};

export const getRoute = hash => {
  if (!hash) return "";

  return hash.slice(1);
};

export const getHash = route => {
  if (!route) return "#";

  return "#" + route;
};
