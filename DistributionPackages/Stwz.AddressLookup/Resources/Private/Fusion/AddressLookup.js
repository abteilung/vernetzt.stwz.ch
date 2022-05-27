document.addEventListener('alpine:init', () => {
    Alpine.data('addresslookup', () => ({
        
        url: document.getElementById('addressLookup').dataset.url,
        error: false,
        success: false,
        loading: false,
        response: '',
        
        address: {
            city: '',
            country: '',
            zip_code: '',
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
                            this.success = true;
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










//   document.addEventListener('alpine:init', () => {

//     Alpine.data('addresslookup', () => ({
        
//         url: document.getElementById('addressLookup').dataset.url,
//         error: false,
//         success: false,
//         loading: false,
//         response: '',
        
//         address: {
//             city: '',
//             country: '',
//             zip_code: '',
//             streetname: '',
//             house_number: '',
//             house_number_suffix: ''
//         },

//         validation: {
//             city: '',
//             street: '',
//             house_number: '',
//             required: {
//                 message: 'Pflichtfeld'
//             }
//         },

//         check() {
//             const addressCheckButton = document.getElementById('addressCheckButton');
//             const adr_city = document.getElementById('city');
//             const adr_streetname = document.getElementById('streetname');
//             const adr_house_number = document.getElementById('house_number');

//             //Show input error messages
//             function showError(input, message) {
//                 const formControl = input.parentElement;
//                 formControl.className = 'form-control error';
//                 const small = formControl.querySelector('small');
//                 small.innerText = message;
//                 console.log('err');
//             }

//             //show success colour
//             function showSucces(input) {
//                 const formControl = input.parentElement;
//                 formControl.className = 'form-control success';
//                 console.log('success');
//             }

//             //get FieldName
//             function getFieldName(input) {
//                 return input.id.charAt(0).toUpperCase() + input.id.slice(1);
//             }

//             //checkRequired fields
//             function checkRequired(inputArr) {
//                 inputArr.forEach(function(input){
//                     if(input.value.trim() === ''){
//                         showError(input,`${getFieldName(input)} is required`);
//                     }else {
//                         showSucces(input);
//                     }
//                 });
//             }

//             addressCheckButton.addEventListener('click',function(e) {
//                 e.preventDefault();
//                 checkRequired([adr_city, adr_streetname, adr_house_number]);
//             });

//             this.loading = true;
//             console.log(this.url);
//             fetch(
//                 this.url    +'?streetname='+ this.address.streetname 
//                             +'&zip='+ this.address.zip_code 
//                             +'&city='+ this.address.city 
//                             +'&country='+ this.address.country
//                             +'&houseNumber='+ this.address.house_number 
//                             +'&houseNumberSuffix='+ this.address.house_number_suffix
//                 ,{
//                     method: 'GET', 
//                     headers: { 'Content-Type': 'application/json'}
//             })
//             .then(response => response.json())
//             .then(data => {
//                 if(data.status == 'success'){
//                     this.loading = false;
//                     this.success = true;
//                     this.error = !this.success;
//                     let event = new CustomEvent('addresslookup-success', {});
//                     window.dispatchEvent(event);
//                 }else{
//                     this.loading = false;
//                     this.success = false;
//                     this.error = !this.success;
//                     let event = new CustomEvent('addresslookup-error', {});
//                     window.dispatchEvent(event);
//                 }
//                 return data;
//             })
//             .catch(error => {
//                 this.loading = false;
//                 return error;
//             });
            
            
//         },
//     }))
// });