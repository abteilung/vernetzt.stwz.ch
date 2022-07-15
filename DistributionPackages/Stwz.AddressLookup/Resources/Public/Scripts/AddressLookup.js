(() => {
  // DistributionPackages/Stwz.AddressLookup/Resources/Private/Fusion/AddressLookup.js
  document.addEventListener("alpine:init", () => {
    Alpine.data("addresslookup", () => ({
      url: document.getElementById("addressLookup").dataset.url,
      fatal: false,
      error: false,
      success: false,
      loading: false,
      response: "",
      isReady: false,
      rfcu_date: "",
      rfcu_ready: "",
      rollout_status: "",
      acquisiton_status: "",
      user: {
        first_name: "",
        last_name: "",
        email: ""
      },
      address: {
        city: "Zofingen",
        country: "",
        zip_code: "4800",
        streetname: "",
        house_number: "",
        house_number_suffix: ""
      },
      validation: {
        city: "",
        street: "",
        house_number: "",
        required: {
          message: "Pflichtfeld"
        }
      },
      validate(field) {
      },
      check() {
        if (!this.address.city.length) {
          this.validation.city = this.validation.required.message;
        }
        if (!this.address.streetname.length) {
          this.validation.streetname = this.validation.required.message;
        }
        if (!this.address.house_number.length) {
          this.validation.house_number = this.validation.required.message;
          return;
        }
        this.loading = true;
        console.log(this.url);
        fetch(this.url + "?streetname=" + this.address.streetname + "&zip=" + this.address.zip_code + "&city=" + this.address.city + "&country=" + this.address.country + "&houseNumber=" + this.address.house_number + "&houseNumberSuffix=" + this.address.house_number_suffix, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }).then((response) => response.json()).then((data) => {
          this.rfcu_date = data.data[0]["rfcu_date"], this.rfcu_ready = data.data[0]["rfcu_ready"], this.rollout_status = data.data[0]["rollout_status"], this.acquisiton_status = data.data[0]["acquisiton_status"];
          var today = new Date();
          var objDate = new Date(this.rfcu_date);
          console.log(today.getTime());
          console.log(objDate.getTime());
          console.log(data.data[0]["rfcu_date"]);
          if (objDate != "null" && today.getTime() > objDate.getTime() && objDate.getTime() > 0) {
            console.log(today.getTime());
            console.log(objDate.getTime());
            this.isReady = true;
            console.log("Today is great!");
          } else {
            this.isReady = false;
            console.log("Today is not great!");
          }
          if (data.status == "success" && this.isReady) {
            this.loading = false;
            this.success = true;
            this.error = !this.success;
            let event = new CustomEvent("addresslookup-success", {});
            window.dispatchEvent(event);
          } else {
            this.loading = false;
            this.success = false;
            this.error = !this.success;
            let event = new CustomEvent("addresslookup-error", {});
            window.dispatchEvent(event);
          }
          return data;
        }).catch((error) => {
          this.loading = false;
          this.success = false;
          this.error = !this.success;
          let event = new CustomEvent("addresslookup-error", {});
          window.dispatchEvent(event);
          return error;
        });
      }
    }));
  });
})();
//# sourceMappingURL=AddressLookup.js.map
