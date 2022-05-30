(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.join = exports.subst = exports.query = void 0;
      function urlcat2(baseUrlOrTemplate, pathTemplateOrParams, maybeParams) {
        if (maybeParams === void 0) {
          maybeParams = {};
        }
        if (typeof pathTemplateOrParams === "string") {
          var baseUrl = baseUrlOrTemplate;
          var pathTemplate = pathTemplateOrParams;
          var params = maybeParams;
          return urlcatImpl(pathTemplate, params, baseUrl);
        } else {
          var baseTemplate = baseUrlOrTemplate;
          var params = pathTemplateOrParams;
          return urlcatImpl(baseTemplate, params);
        }
      }
      exports.default = urlcat2;
      function urlcatImpl(pathTemplate, params, baseUrl) {
        var _a = path(pathTemplate, params), renderedPath = _a.renderedPath, remainingParams = _a.remainingParams;
        var cleanParams = removeNullOrUndef(remainingParams);
        var renderedQuery = query(cleanParams);
        var pathAndQuery = join(renderedPath, "?", renderedQuery);
        return baseUrl ? join(baseUrl, "/", pathAndQuery) : pathAndQuery;
      }
      function query(params) {
        return new URLSearchParams(params).toString();
      }
      exports.query = query;
      function subst(template, params) {
        var renderedPath = path(template, params).renderedPath;
        return renderedPath;
      }
      exports.subst = subst;
      function path(template, params) {
        var remainingParams = __assign({}, params);
        var allowedTypes = ["boolean", "string", "number"];
        var renderedPath = template.replace(/:\w+/g, function(p) {
          var key = p.slice(1);
          if (/^\d+$/.test(key)) {
            return p;
          }
          if (!params.hasOwnProperty(key)) {
            throw new Error("Missing value for path parameter " + key + ".");
          }
          if (!allowedTypes.includes(typeof params[key])) {
            throw new TypeError("Path parameter " + key + " cannot be of type " + typeof params[key] + ". " + ("Allowed types are: " + allowedTypes.join(", ") + "."));
          }
          if (typeof params[key] === "string" && params[key].trim() === "") {
            throw new Error("Path parameter " + key + " cannot be an empty string.");
          }
          delete remainingParams[key];
          return encodeURIComponent(params[key]);
        });
        return { renderedPath, remainingParams };
      }
      function join(part1, separator, part2) {
        var p1 = part1.endsWith(separator) ? part1.slice(0, -separator.length) : part1;
        var p2 = part2.startsWith(separator) ? part2.slice(separator.length) : part2;
        return p1 === "" || p2 === "" ? p1 + p2 : p1 + separator + p2;
      }
      exports.join = join;
      function removeNullOrUndef(params) {
        return Object.keys(params).filter(function(k) {
          return notNullOrUndefined(params[k]);
        }).reduce(function(result, k) {
          result[k] = params[k];
          return result;
        }, {});
      }
      function notNullOrUndefined(v) {
        return v !== void 0 && v !== null;
      }
    }
  });

  // DistributionPackages/Stwz.Shop/Resources/Private/Fusion/Shop.js
  var urlcat = require_dist().default;
  document.addEventListener("alpine:init", () => {
    Alpine.data("shop", () => ({
      showBtn: false,
      api_url: "https://portal.stwz-vernetzt.ch/Shop/Wizard/PlainOrderWizard.aspx",
      lang: document.documentElement.lang || "de",
      guid: document.getElementById(localStorage.getItem("Internet")).dataset.guid,
      iv: document.getElementById(localStorage.getItem("Internet")).dataset.iv,
      id: "",
      zip: "",
      city: "",
      street: "",
      id_key: "",
      zip_key: "",
      city_key: "",
      street_key: "",
      shop_url: "",
      getShopUrl() {
        this.guid = document.getElementById(localStorage.getItem("Internet")).dataset.guid, this.iv = document.getElementById(localStorage.getItem("Internet")).dataset.iv, this.id = document.getElementById("addressLookupForm").querySelector('[x-model="address.house_number"').value, this.zip = document.getElementById("addressLookupForm").querySelector('[x-model="address.zip_code"').value, this.city = document.getElementById("addressLookupForm").querySelector('[x-model="address.city"').value, this.street = document.getElementById("addressLookupForm").querySelector('[x-model="address.streetname"').value, this.id_key = this.iv + "2140070229", this.zip_key = this.iv + "2140070227", this.city_key = this.iv + "2140070235", this.street_key = this.iv + "2140070231", this.shop_url = urlcat(this.api_url, "/", {
          GUID_ID: this.guid,
          lang: this.lang,
          IV: this.iv,
          [this.id_key]: this.zip,
          [this.zip_key]: this.city,
          [this.city_key]: this.street,
          [this.street_key]: this.id
        });
      }
    }));
  });
  document.addEventListener("alpine:init", () => {
    Alpine.data("cart", () => ({
      total: 0,
      value: "",
      mobile: localStorage.getItem("Mobile") ? parseFloat(document.getElementById(localStorage.getItem("Mobile")).dataset.price) : 0,
      internet: localStorage.getItem("Internet") ? parseFloat(document.getElementById(localStorage.getItem("Internet")).dataset.price) : 0,
      telephone: localStorage.getItem("Telefonie") ? parseFloat(document.getElementById(localStorage.getItem("Telefonie")).dataset.price) : 0,
      television: localStorage.getItem("TV") ? parseFloat(document.getElementById(localStorage.getItem("TV")).dataset.price) : 0,
      totalDiscount: 0,
      mobileDiscount: 0,
      internetDiscount: 0,
      telephoneDiscount: 0,
      televisionDiscount: 0,
      count() {
        this.mobile = localStorage.getItem("Mobile") ? parseFloat(document.getElementById(localStorage.getItem("Mobile")).dataset.price) : 0;
        this.internet = localStorage.getItem("Internet") ? parseFloat(document.getElementById(localStorage.getItem("Internet")).dataset.price) : 0;
        this.telephone = localStorage.getItem("Telefonie") ? parseFloat(document.getElementById(localStorage.getItem("Telefonie")).dataset.price) : 0;
        this.television = localStorage.getItem("TV") ? parseFloat(document.getElementById(localStorage.getItem("TV")).dataset.price) : 0;
        console.log(this.internet, this.television, this.telephone, this.mobile);
        this.total = Number.isInteger(this.internet + this.television + this.telephone + this.mobile) ? parseInt(this.internet + this.television + this.telephone + this.mobile) : parseFloat(this.internet + this.television + this.telephone + this.mobile);
      },
      reset(group) {
        console.log(group);
        var id = localStorage.getItem(group);
        if (id) {
          document.getElementById(id).querySelector('[value="' + id + '"]').checked = false;
          localStorage.removeItem(group);
        }
      },
      resetAll() {
        localStorage.removeItem("TV");
        localStorage.removeItem("Mobile");
        localStorage.removeItem("Telefonie");
      }
    }));
  });
  window.Components = {}, window.Components.radioGroup = function({
    initialCheckedIndex: e = 0
  } = {}) {
    return {
      value: void 0,
      active: void 0,
      valueTV: void 0,
      valueMobile: void 0,
      valueInternet: void 0,
      valueTelefonie: void 0,
      init() {
      }
    };
  };
})();
//# sourceMappingURL=Shop.js.map
