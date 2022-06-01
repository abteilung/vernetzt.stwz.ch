document.addEventListener('alpine:init', () => {
    Alpine.data('addresslookup', () => ({
        
        url: document.getElementById('addressLookup').dataset.url,
        fatal: false,
        error: false,
        success: false,
        loading: false,
        response: '',
        
        address: {
            city: 'Zofingen',
            country: '',
            zip_code: '4800',
            streetname: '',
            house_number: '',
            house_number_suffix: ''
        },

        validation: {
            city: '',
            street: '',
            house_number: '',
            required: {
                message: 'Pflichtfeld'
            }
        },
        
        validate(field) {

        },

        check() {
            if (!this.address.city.length){ this.validation.city = this.validation.required.message; } 
            if (!this.address.streetname.length){ this.validation.streetname = this.validation.required.message; } 
            if (!this.address.house_number.length){ this.validation.house_number = this.validation.required.message; return; } 

            this.loading = true;
            console.log(this.url);
            fetch(
                this.url   +'?streetname='+ this.address.streetname 
                           +'&zip='+ this.address.zip_code 
                           +'&city='+ this.address.city 
                           +'&country='+ this.address.country
                           +'&houseNumber='+ this.address.house_number 
                           +'&houseNumberSuffix='+ this.address.house_number_suffix
                    ,{
                        method: 'GET', 
                        headers: { 'Content-Type': 'application/json'}
                    })
                    .then(response => response.json())
                    .then(data => {
                        if(data.status == 'success'){
                            this.loading = false;
                            // this.success = true;
                            this.success = false;
                            this.error = !this.success;
                            let event = new CustomEvent('addresslookup-success', {});
                            window.dispatchEvent(event);
                        }else{
                            this.loading = false;
                            this.success = false;
                            this.error = !this.success;
                            let event = new CustomEvent('addresslookup-error', {});
                            window.dispatchEvent(event);
                        }
                        return data;
                    })
                    .catch(error => {
                        this.loading = false;
                        return error;
                    });
        },

            
    }))
  });