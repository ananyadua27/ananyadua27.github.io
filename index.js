(() => {
  const year = new Date().getFullYear().toString();
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = year;
  });
})();