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

      this.id_key = 'IV_' + this.iv + '-Attr-2140070229',
      this.zip_key = 'IV_' + this.iv + '-Attr-2140070227',
      this.city_key = 'IV_' + this.iv + '-Attr-2140070235',
      this.street_key = 'IV_' + this.iv + '-Attr-2140070231',

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
      showBtn: false,
      
      mobile: localStorage.getItem('Mobile') ? parseFloat(document.getElementById(localStorage.getItem('Mobile')).dataset.price) : 0,
      internet: localStorage.getItem('Internet') ? parseFloat(document.getElementById(localStorage.getItem('Internet')).dataset.price) : 0,
      telephone: localStorage.getItem('Telefonie') ? parseFloat(document.getElementById(localStorage.getItem('Telefonie')).dataset.price) : 0,
      television: localStorage.getItem('TV') ? parseFloat(document.getElementById(localStorage.getItem('TV')).dataset.price) : 0,

      mobileTitle: localStorage.getItem('Mobile') ? document.getElementById(localStorage.getItem('Mobile')).dataset.title.replace('<br/>','').replace('<br>','') : '',
      internetTitle: localStorage.getItem('Internet') ? document.getElementById(localStorage.getItem('Internet')).dataset.title.replace('<br/>','').replace('<br>','') : '',
      televisionTitle: localStorage.getItem('TV') ? document.getElementById(localStorage.getItem('TV')).dataset.title.replace('<br/>','').replace('<br>','') : '',
      telephoneTitle: localStorage.getItem('Telefonie') ? document.getElementById(localStorage.getItem('Telefonie')).dataset.title.replace('<br/>','').replace('<br>','') : '',

      totalDiscount: 0,
      mobileDiscount: localStorage.getItem('Mobile') ? parseFloat(document.getElementById(localStorage.getItem('Mobile')).dataset.discount) : 0,
      internetDiscount: localStorage.getItem('Internet') ? parseFloat(document.getElementById(localStorage.getItem('Internet')).dataset.discount) : 0,
      telephoneDiscount: localStorage.getItem('Telefonie') ? parseFloat(document.getElementById(localStorage.getItem('Telefonie')).dataset.discount) : 0,
      televisionDiscount: localStorage.getItem('TV') ? parseFloat(document.getElementById(localStorage.getItem('TV')).dataset.discount) : 0,

      // _checkItem(type){},
      // _parseItem(el){},
      // _getStore(store){},

      count() {
        this.mobile = localStorage.getItem('Mobile') ? parseFloat(document.getElementById(localStorage.getItem('Mobile')).dataset.price) : 0;
        this.internet = localStorage.getItem('Internet') ? parseFloat(document.getElementById(localStorage.getItem('Internet')).dataset.price) : 0;
        this.telephone = localStorage.getItem('Telefonie') ? parseFloat(document.getElementById(localStorage.getItem('Telefonie')).dataset.price) : 0;
        this.television = localStorage.getItem('TV') ? parseFloat(document.getElementById(localStorage.getItem('TV')).dataset.price) : 0;
        
        this.mobileTitle = localStorage.getItem('Mobile') ? document.getElementById(localStorage.getItem('Mobile')).dataset.title.replace('<br/>','').replace('<br>','') : '',
        this.internetTitle = localStorage.getItem('Internet') ? document.getElementById(localStorage.getItem('Internet')).dataset.title.replace('<br/>','').replace('<br>','') : '';
        this.televisionTitle = localStorage.getItem('TV') ? document.getElementById(localStorage.getItem('TV')).dataset.title.replace('<br/>','').replace('<br>','') : '';
        this.telephoneTitle = localStorage.getItem('Telefonie') ? document.getElementById(localStorage.getItem('Telefonie')).dataset.title.replace('<br/>','').replace('<br>','') : '';
        
        this.mobileDiscount = localStorage.getItem('Mobile') ? parseFloat(document.getElementById(localStorage.getItem('Mobile')).dataset.discount) : 0,
        this.internetDiscount = localStorage.getItem('Internet') ? parseFloat(document.getElementById(localStorage.getItem('Internet')).dataset.discount) : 0,
        this.telephoneDiscount = localStorage.getItem('Telefonie') ? parseFloat(document.getElementById(localStorage.getItem('Telefonie')).dataset.discount) : 0,
        this.televisionDiscount = localStorage.getItem('TV') ? parseFloat(document.getElementById(localStorage.getItem('TV')).dataset.discount) : 0,
        // console.log(this.internet, this.television, this.telephone, this.mobile);
        
        this.total = Number.isInteger(this.internet + this.television + this.telephone + this.mobile) ? parseInt(this.internet + this.television + this.telephone + this.mobile) : parseFloat(this.internet + this.television + this.telephone + this.mobile);
        this.totalDiscount = Number.isInteger(this.internetDiscount + this.televisionDiscount + this.telephoneDiscount + this.mobileDiscount) ? parseInt(this.internetDiscount + this.televisionDiscount + this.telephoneDiscount + this.mobileDiscount) : parseFloat(this.internetDiscount + this.televisionDiscount + this.telephoneDiscount + this.mobileDiscount);
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

document.addEventListener('alpine:init', () => {
  Alpine.data('radioGroup', () => ({

      value: void 0,
      active: void 0,
      valueTV: localStorage.getItem('TV') ? localStorage.getItem('TV') :0,
      valueMobile: localStorage.getItem('Mobile') ? localStorage.getItem('Mobile') : 0,
      valueInternet: localStorage.getItem('Internet') ? localStorage.getItem('Internet') : 0,
      valueTelefonie: localStorage.getItem('Telefonie') ? localStorage.getItem('Telefonie') : 0,
      preventChange: false,
      init(){
        
      },
      change(group){
        if(this.preventChange == true){this.preventChange = false; this['value' + group] = 0; return }
        // console.log('change-bevor: '+this.active +'-'+ this['value' + group]  +'-'+ localStorage.getItem(group));
        if(!this['value' + group] || this['value' + group] != localStorage.getItem(group)){
          localStorage.setItem(group, this['value' + group]); 
        }
        // console.log('change-after: '+this.active +'-'+ this['value' + group]  +'-'+localStorage.getItem(group));
        
      },
      click(group){
        // console.log('click-bevor - '+group+' - '+this['value' + group]+' - '+localStorage.getItem(group));
        if(this['value' + group] && group != 'Internet' && this['value' + group] == localStorage.getItem(group)){
          this['value' + group] = 0;
          localStorage.removeItem(group);
          this.preventChange = true;
          return 0;
        }
        // console.log('click-after - '+group+' - '+this['value' + group]+' - '+localStorage.getItem(group));
      }
  }))
});
  