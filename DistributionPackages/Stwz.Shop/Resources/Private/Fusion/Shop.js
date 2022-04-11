const urlcat = require('urlcat').default;

console.log(urlcat('https://api.foo.com', ':name', { id: 25, name: 'knpwrs' }));

window.Components={},
window.Components.radioGroup = function({
  initialCheckedIndex: e = 0
} = {}) {
  return {
      value: void 0,
      active: void 0,
      init() {
          let t = Array.from(this.$el.querySelectorAll("input"));
          this.value = t[e]?.value;
          for (let e of t) e.addEventListener("change", (() => {
              this.active = e.value
          })), e.addEventListener("focus", (() => {
              this.active = e.value
          }));
          window.addEventListener("focus", (() => {
              console.log("Focus change"), t.includes(document.activeElement) || (console.log("HIT"), this.active = void 0)
          }), !0)
      }
  }
}


window.ShopItems = () => ({
    value: 0,
    calculatePrice(e) {
      this.value = e.target.dataset.price;
    },
});
  