const urlcat = require('urlcat').default;

console.log(urlcat('https://api.foo.com', ':name', { id: 25, name: 'knpwrs' }));

window.ShopItems = () => ({
    value: 0,
    calculatePrice(e) {        
      this.value = e.target.dataset.price;
    },
});
  