"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // DistributionPackages/Stwz.Navigation/Resources/Private/Fusion/scripts/NavScroll.js
  var require_NavScroll = __commonJS({
    "DistributionPackages/Stwz.Navigation/Resources/Private/Fusion/scripts/NavScroll.js"() {
      var navigation = document.querySelector("#primaryMenu");
      var scrollUp = "-translate-y-0";
      var scrollUpBg = "bg-nav-scrolled";
      var scrollUpBgDark = "dark:bg-nav-scrolled";
      var scrollDown = "-translate-y-32";
      var lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 60) {
          navigation.classList.remove(scrollUp, scrollUpBg, scrollUpBgDark);
          return;
        }
        if (currentScroll > lastScroll && !navigation.classList.contains(scrollDown)) {
          navigation.classList.remove(scrollUp, scrollUpBg, scrollUpBgDark);
          navigation.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && navigation.classList.contains(scrollDown)) {
          navigation.classList.remove(scrollDown);
          navigation.classList.add(scrollUp, scrollUpBg, scrollUpBgDark);
        }
        lastScroll = currentScroll;
      });
    }
  });

  // DistributionPackages/Stwz.Navigation/Resources/Private/Fusion/Navigation.js
  var import_NavScroll = __toESM(require_NavScroll());
})();
//# sourceMappingURL=Navigation.js.map
