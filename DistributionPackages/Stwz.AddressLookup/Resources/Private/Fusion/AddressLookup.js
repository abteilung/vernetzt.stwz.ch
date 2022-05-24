document.addEventListener('alpine:init', () => {
    Alpine.data('addresslookup', () => ({
        
        url: document.getElementById('addressLookup').dataset.url,
        response: '',
        
        address: {
            city: '',
            country: '',
            zip_code: '',
            streetname: '',
            house_number: '',
            house_number_suffix: ''
        },
        
        check() {
            console.log(this.url);
            fetch(
                this.url   +'?streetname='+ address.streetname 
                           +'&city='+ address.city 
                           +'&country='+address.country
                           +'&zip='+ address.zip_code 
                           +'&houseNumber='+ address.house_number 
                           +'&houseNumberSuffix='
                    ,{
                        method: 'GET', 
                        headers: { 'Content-Type': 'application/json'}
                    }).then(response => console.log(response.json()));
        },
  
        // reset() {
          
        // },
  
        // resetAll(){
        
        // }
    }))
  });