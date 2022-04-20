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
  console.log(urlcat("https://api.foo.com", ":name", { id: 25, name: "knpwrs" }));
  window.Components = {}, window.Components.radioGroup = function({
    initialCheckedIndex: e = 0
  } = {}) {
    return {
      value: void 0,
      active: void 0,
      init() {
      }
    };
  };
  window.ShopItems = () => ({
    value: 0,
    calculatePrice(e) {
      this.value = e.target.dataset.price;
    }
  });
})();
//# sourceMappingURL=Shop.js.map
