(()=>{var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var I=S(i=>{"use strict";var s=i&&i.__assign||function(){return s=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++){t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)};Object.defineProperty(i,"__esModule",{value:!0});i.join=i.subst=i.query=void 0;function v(e,t,l){if(l===void 0&&(l={}),typeof t=="string"){var n=e,a=t,r=l;return d(a,r,n)}else{var o=e,r=t;return d(o,r)}}i.default=v;function d(e,t,l){var n=u(e,t),a=n.renderedPath,r=n.remainingParams,o=y(r),h=m(o),g=c(a,"?",h);return l?c(l,"/",g):g}function m(e){return new URLSearchParams(e).toString()}i.query=m;function p(e,t){var l=u(e,t).renderedPath;return l}i.subst=p;function u(e,t){var l=s({},t),n=["boolean","string","number"],a=e.replace(/:\w+/g,function(r){var o=r.slice(1);if(/^\d+$/.test(o))return r;if(!t.hasOwnProperty(o))throw new Error("Missing value for path parameter "+o+".");if(!n.includes(typeof t[o]))throw new TypeError("Path parameter "+o+" cannot be of type "+typeof t[o]+". "+("Allowed types are: "+n.join(", ")+"."));if(typeof t[o]=="string"&&t[o].trim()==="")throw new Error("Path parameter "+o+" cannot be an empty string.");return delete l[o],encodeURIComponent(t[o])});return{renderedPath:a,remainingParams:l}}function c(e,t,l){var n=e.endsWith(t)?e.slice(0,-t.length):e,a=l.startsWith(t)?l.slice(t.length):l;return n===""||a===""?n+a:n+t+a}i.join=c;function y(e){return Object.keys(e).filter(function(t){return f(e[t])}).reduce(function(t,l){return t[l]=e[l],t},{})}function f(e){return e!=null}});var b=I().default;document.addEventListener("alpine:init",()=>{Alpine.data("shop",()=>({showBtn:!1,api_url:"https://portal.stwz-vernetzt.ch/Shop/Wizard/PlainOrderWizard.aspx",lang:document.documentElement.lang||"de",guid:localStorage.getItem("Internet")?document.getElementById(localStorage.getItem("Internet")).dataset.guid:"",iv:localStorage.getItem("Internet")?document.getElementById(localStorage.getItem("Internet")).dataset.iv:"",id:"",zip:"",city:"",street:"",id_key:"",zip_key:"",city_key:"",street_key:"",shop_url:"",getShopUrl(){this.guid=localStorage.getItem("Internet")?document.getElementById(localStorage.getItem("Internet")).dataset.guid:"",this.iv=localStorage.getItem("Internet")?document.getElementById(localStorage.getItem("Internet")).dataset.iv:"",this.id=document.getElementById("addressLookupForm").querySelector('[x-model="address.house_number"').value,this.zip=document.getElementById("addressLookupForm").querySelector('[x-model="address.zip_code"').value,this.city=document.getElementById("addressLookupForm").querySelector('[x-model="address.city"').value,this.street=document.getElementById("addressLookupForm").querySelector('[x-model="address.streetname"').value,this.id_key="IV_"+this.iv+"-Attr-2140070229",this.zip_key="IV_"+this.iv+"-Attr-2140070227",this.city_key="IV_"+this.iv+"-Attr-2140070235",this.street_key="IV_"+this.iv+"-Attr-2140070231",this.shop_url=b(this.api_url,"/",{GUID_ID:this.guid,lang:this.lang,IV:this.iv,[this.id_key]:this.zip,[this.zip_key]:this.city,[this.city_key]:this.street,[this.street_key]:this.id})}}))});document.addEventListener("alpine:init",()=>{Alpine.data("cart",()=>({total:0,value:"",showBtn:!1,mobile:localStorage.getItem("Mobile")?parseFloat(document.getElementById(localStorage.getItem("Mobile")).dataset.price):0,internet:localStorage.getItem("Internet")?parseFloat(document.getElementById(localStorage.getItem("Internet")).dataset.price):0,telephone:localStorage.getItem("Telefonie")?parseFloat(document.getElementById(localStorage.getItem("Telefonie")).dataset.price):0,television:localStorage.getItem("TV")?parseFloat(document.getElementById(localStorage.getItem("TV")).dataset.price):0,mobileTitle:localStorage.getItem("Mobile")?document.getElementById(localStorage.getItem("Mobile")).dataset.title.replace("<br/>","").replace("<br>",""):"",internetTitle:localStorage.getItem("Internet")?document.getElementById(localStorage.getItem("Internet")).dataset.title.replace("<br/>","").replace("<br>",""):"",televisionTitle:localStorage.getItem("TV")?document.getElementById(localStorage.getItem("TV")).dataset.title.replace("<br/>","").replace("<br>",""):"",telephoneTitle:localStorage.getItem("Telefonie")?document.getElementById(localStorage.getItem("Telefonie")).dataset.title.replace("<br/>","").replace("<br>",""):"",totalDiscount:0,mobileDiscount:localStorage.getItem("Mobile")?parseFloat(document.getElementById(localStorage.getItem("Mobile")).dataset.discount):0,internetDiscount:localStorage.getItem("Internet")?parseFloat(document.getElementById(localStorage.getItem("Internet")).dataset.discount):0,telephoneDiscount:localStorage.getItem("Telefonie")?parseFloat(document.getElementById(localStorage.getItem("Telefonie")).dataset.discount):0,televisionDiscount:localStorage.getItem("TV")?parseFloat(document.getElementById(localStorage.getItem("TV")).dataset.discount):0,count(){this.mobile=localStorage.getItem("Mobile")?parseFloat(document.getElementById(localStorage.getItem("Mobile")).dataset.price):0,this.internet=localStorage.getItem("Internet")?parseFloat(document.getElementById(localStorage.getItem("Internet")).dataset.price):0,this.telephone=localStorage.getItem("Telefonie")?parseFloat(document.getElementById(localStorage.getItem("Telefonie")).dataset.price):0,this.television=localStorage.getItem("TV")?parseFloat(document.getElementById(localStorage.getItem("TV")).dataset.price):0,this.mobileTitle=localStorage.getItem("Mobile")?document.getElementById(localStorage.getItem("Mobile")).dataset.title.replace("<br/>","").replace("<br>",""):"",this.internetTitle=localStorage.getItem("Internet")?document.getElementById(localStorage.getItem("Internet")).dataset.title.replace("<br/>","").replace("<br>",""):"",this.televisionTitle=localStorage.getItem("TV")?document.getElementById(localStorage.getItem("TV")).dataset.title.replace("<br/>","").replace("<br>",""):"",this.telephoneTitle=localStorage.getItem("Telefonie")?document.getElementById(localStorage.getItem("Telefonie")).dataset.title.replace("<br/>","").replace("<br>",""):"",this.mobileDiscount=localStorage.getItem("Mobile")?parseFloat(document.getElementById(localStorage.getItem("Mobile")).dataset.discount):0,this.internetDiscount=localStorage.getItem("Internet")?parseFloat(document.getElementById(localStorage.getItem("Internet")).dataset.discount):0,this.telephoneDiscount=localStorage.getItem("Telefonie")?parseFloat(document.getElementById(localStorage.getItem("Telefonie")).dataset.discount):0,this.televisionDiscount=localStorage.getItem("TV")?parseFloat(document.getElementById(localStorage.getItem("TV")).dataset.discount):0,this.total=Number.isInteger(this.internet+this.television+this.telephone+this.mobile)?parseInt(this.internet+this.television+this.telephone+this.mobile):parseFloat(this.internet+this.television+this.telephone+this.mobile),this.totalDiscount=Number.isInteger(this.internetDiscount+this.televisionDiscount+this.telephoneDiscount+this.mobileDiscount)?parseInt(this.internetDiscount+this.televisionDiscount+this.telephoneDiscount+this.mobileDiscount):parseFloat(this.internetDiscount+this.televisionDiscount+this.telephoneDiscount+this.mobileDiscount)},reset(e){console.log(e);var t=localStorage.getItem(e);t&&(document.getElementById(t).querySelector('[value="'+t+'"]').checked=!1,localStorage.removeItem(e))},resetAll(){localStorage.removeItem("TV"),localStorage.removeItem("Mobile"),localStorage.removeItem("Telefonie")}}))});document.addEventListener("alpine:init",()=>{Alpine.data("radioGroup",()=>({value:void 0,active:void 0,valueTV:localStorage.getItem("TV")?localStorage.getItem("TV"):0,valueMobile:localStorage.getItem("Mobile")?localStorage.getItem("Mobile"):0,valueInternet:localStorage.getItem("Internet")?localStorage.getItem("Internet"):0,valueTelefonie:localStorage.getItem("Telefonie")?localStorage.getItem("Telefonie"):0,preventChange:!1,init(){},change(e){if(this.preventChange==!0){this.preventChange=!1,this["value"+e]=0;return}(!this["value"+e]||this["value"+e]!=localStorage.getItem(e))&&localStorage.setItem(e,this["value"+e])},click(e){if(this["value"+e]&&e!="Internet"&&this["value"+e]==localStorage.getItem(e))return this["value"+e]=0,localStorage.removeItem(e),this.preventChange=!0,0}}))});})();
//# sourceMappingURL=Shop.js.map
