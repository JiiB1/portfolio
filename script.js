function onScrollingPage() {
  if (!window) {
    return;
  }
  var coef = window.scrollY / window.scrollMaxY;
  var bar_bounding = this.document
    .getElementById("thebar")
    .getBoundingClientRect();
  var circle = this.document.getElementById("thecircle");

  var value =
    bar_bounding.top +
    coef * bar_bounding.height -
    0.5 * circle.getBoundingClientRect().height;
  circle.style.top = `${value.toString()}px`;
}

function resizeBars() {
  var value =
    this.document.getElementById("main-header").getBoundingClientRect().height /
    2;
  this.document.getElementById("thebar").style.top = `${value.toString()}px`;
  this.document.getElementById("thebar").style.bottom =
    `${this.document.getElementById("main-footer").getBoundingClientRect().height.toString()}px`;
  onScrollingPage();
}

window?.addEventListener("scroll", onScrollingPage);
window?.addEventListener("resize", resizeBars);
resizeBars();
