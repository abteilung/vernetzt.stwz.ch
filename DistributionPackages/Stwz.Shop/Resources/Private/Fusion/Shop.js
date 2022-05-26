const urlcat = require('urlcat').default;

console.log(urlcat('https://api.foo.com', ':name', { id: 25, name: 'knpwrs' }));

document.addEventListener('alpine:init', () => {
  Alpine.data('cart', () => ({
      total: 0,
      value: '',
      
      mobile: localStorage.getItem('Mobile') ? parseFloat(document.getElementById(localStorage.getItem('Mobile')).dataset.price).toFixed(2) : 0,
      internet: localStorage.getItem('Internet') ? parseFloat(document.getElementById(localStorage.getItem('Internet')).dataset.price).toFixed(2) : 0,
      telephone: localStorage.getItem('Telefonie') ? parseFloat(document.getElementById(localStorage.getItem('Telefonie')).dataset.price).toFixed(2) : 0,
      television: localStorage.getItem('TV') ? parseFloat(document.getElementById(localStorage.getItem('TV')).dataset.price).toFixed(2) : 0,

      totalDiscount: 0,
      mobileDiscount: 0,
      internetDiscount: 0,
      telephoneDiscount: 0,
      televisionDiscount: 0,

      count() {
        this.mobile = localStorage.getItem('Mobile') ? parseFloat(document.getElementById(localStorage.getItem('Mobile')).dataset.price) : 0;
        this.internet = localStorage.getItem('Internet') ? parseFloat(document.getElementById(localStorage.getItem('Internet')).dataset.price) : 0;
        this.telephone = localStorage.getItem('Telefonie') ? parseFloat(document.getElementById(localStorage.getItem('Telefonie')).dataset.price) : 0;
        this.television = localStorage.getItem('TV') ? parseFloat(document.getElementById(localStorage.getItem('TV')).dataset.price) : 0;
        
        console.log(this.internet, this.television, this.telephone, this.mobile);
        
        this.total = (this.internet + this.television + this.telephone + this.mobile).toFixed(2);
      },

      reset(group) {
        console.log(group);
        var id = localStorage.getItem(group);
        if(id){
          document.getElementById(id).querySelector('[value="'+ id +'"]').checked = false;
          localStorage.removeItem(group);
        }
      },

      resetAll(){
        localStorage.removeItem('TV');
        localStorage.removeItem('Mobile');
        localStorage.removeItem('Telefonie');
        // this.valueTV = 0;
        // this.valueMobile = 0;
        // this.valueTelefonie = 0;
        // this.valueInternet = localStorage.getItem('Internet') || 0;
        // localStorage.removeItem('Internet');
      }
  }))
});


window.Components={},
window.Components.radioGroup = function({
  initialCheckedIndex: e = 0
} = {}) {
  return {
      value: void 0,
      active: void 0,
      valueTV: void 0,
      valueMobile: void 0,
      valueInternet: void 0,
      valueTelefonie: void 0,
      init(){}
  }
}
  