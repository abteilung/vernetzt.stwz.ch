const urlcat = require('urlcat').default;

document.addEventListener('alpine:init', () => {
  Alpine.data('shop', () => ({

    showBtn: false,

    api_url: 'https://portal.stwz-vernetzt.ch/Shop/Wizard/PlainOrderWizard.aspx',
    lang: document.documentElement.lang || 'de',
    guid: localStorage.getItem('Internet') ? document.getElementById(localStorage.getItem('Internet')).dataset.guid : '',
    iv: localStorage.getItem('Internet') ? document.getElementById(localStorage.getItem('Internet')).dataset.iv : '',
    id: '',
    zip: '',
    city: '',
    street: '',
    id_key: '',
    zip_key: '', 
    city_key: '',
    street_key: '',
    shop_url: '',

    getShopUrl(){
      this.guid = localStorage.getItem('Internet') ? document.getElementById(localStorage.getItem('Internet')).dataset.guid: '',
      this.iv = localStorage.getItem('Internet') ? document.getElementById(localStorage.getItem('Internet')).dataset.iv : '',

      this.id = document.getElementById('addressLookupForm').querySelector('[x-model="address.house_number"').value,
      this.zip = document.getElementById('addressLookupForm').querySelector('[x-model="address.zip_code"').value,
      this.city = document.getElementById('addressLookupForm').querySelector('[x-model="address.city"').value,
      this.street = document.getElementById('addressLookupForm').querySelector('[x-model="address.streetname"').value,

      this.id_key = this.iv + '2140070229',
      this.zip_key = this.iv + '2140070227',
      this.city_key = this.iv + '2140070235',
      this.street_key = this.iv + '2140070231',

      this.shop_url = urlcat(this.api_url, '/', { 
        GUID_ID: this.guid, 
        lang: this.lang, 
        IV: this.iv,
        [this.id_key]: this.zip,
        [this.zip_key]: this.city,
        [this.city_key]: this.street,
        [this.street_key]: this.id 
      })
    }

  }))
});

document.addEventListener('alpine:init', () => {
  Alpine.data('cart', () => ({
      total: 0,
      value: '',
      
      mobile: localStorage.getItem('Mobile') ? parseFloat(document.getElementById(localStorage.getItem('Mobile')).dataset.price) : 0,
      internet: localStorage.getItem('Internet') ? parseFloat(document.getElementById(localStorage.getItem('Internet')).dataset.price) : 0,
      telephone: localStorage.getItem('Telefonie') ? parseFloat(document.getElementById(localStorage.getItem('Telefonie')).dataset.price) : 0,
      television: localStorage.getItem('TV') ? parseFloat(document.getElementById(localStorage.getItem('TV')).dataset.price) : 0,

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
        
        this.total = Number.isInteger(this.internet + this.television + this.telephone + this.mobile) ? parseInt(this.internet + this.television + this.telephone + this.mobile) : parseFloat(this.internet + this.television + this.telephone + this.mobile);
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
  