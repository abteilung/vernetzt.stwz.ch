const urlcat = require('urlcat').default;

console.log(urlcat('https://api.foo.com', ':name', { id: 25, name: 'knpwrs' }));

document.addEventListener('alpine:init', () => {
  Alpine.data('cart', () => ({
      total: 0,
      
      mobile: localStorage.getItem('Mobile') ? parseInt(document.getElementById(localStorage.getItem('Mobile')).dataset.price) : 0,
      internet: localStorage.getItem('Internet') ? parseInt(document.getElementById(localStorage.getItem('Internet')).dataset.price) : 0,
      telephone: localStorage.getItem('Telefonie') ? parseInt(document.getElementById(localStorage.getItem('Telefonie')).dataset.price) : 0,
      television: localStorage.getItem('TV') ? parseInt(document.getElementById(localStorage.getItem('TV')).dataset.price) : 0,

      count() {
        this.mobile = localStorage.getItem('Mobile') ? parseInt(document.getElementById(localStorage.getItem('Mobile')).dataset.price) : 0;
        this.internet = localStorage.getItem('Internet') ? parseInt(document.getElementById(localStorage.getItem('Internet')).dataset.price) : 0;
        this.telephone = localStorage.getItem('Telefonie') ? parseInt(document.getElementById(localStorage.getItem('Telefonie')).dataset.price) : 0;
        this.television = localStorage.getItem('TV') ? parseInt(document.getElementById(localStorage.getItem('TV')).dataset.price) : 0;
        
        console.log(this.internet, this.television, this.telephone, this.mobile);
        
        this.total = this.internet + this.television + this.telephone + this.mobile;
      },
  }))
});


window.Components={},
window.Components.radioGroup = function({
  initialCheckedIndex: e = 0
} = {}) {
  return {
      value: void 0,
      active: void 0,
      init() {
        // Todo: Better selector
          // let t = Array.from(this.$el.querySelectorAll("input"));
          // this.value = t[e]?.value;
          // for (let e of t) e.addEventListener("change", (() => {
          //     this.active = e.value
          // })), e.addEventListener("focus", (() => {
          //     this.active = e.value
          // }));
          // window.addEventListener("focus", (() => {
          //     console.log("Focus change"), t.includes(document.activeElement) || (console.log("HIT"), this.active = void 0)
          // }), !0)
      }
  }
}


window.ShopItems = () => ({
    value: 0,
    calculatePrice(e) {
      this.value = e.target.dataset.price;
    },
});
  