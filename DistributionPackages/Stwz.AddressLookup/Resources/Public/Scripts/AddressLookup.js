(() => {
  // DistributionPackages/Stwz.AddressLookup/Resources/Private/Fusion/AddressLookup.js
  document.addEventListener("alpine:init", () => {
    Alpine.data("addresslookup", () => ({
      url: document.getElementById("addressLookup").dataset.url,
      error: false,
      success: false,
      response: "",
      address: {
        city: "",
        country: "",
        zip_code: "",
        streetname: "",
        house_number: "",
        house_number_suffix: ""
      },
      check() {
        console.log(this.url);
        fetch(this.url + "?streetname=" + this.address.streetname + "&zip=" + this.address.zip_code + "&city=" + this.address.city + "&country=" + this.address.country + "&houseNumber=" + this.address.house_number + "&houseNumberSuffix=" + this.address.house_number_suffix, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }).then((response) => response.json()).then((data) => {
          this.success = data.status == "success" ? true : false;
          this.error = !this.success;
          return data;
        }).catch((error) => {
          return error;
        });
      }
    }));
  });
})();
//# sourceMappingURL=AddressLookup.js.map
