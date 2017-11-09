const cars = require('./data/cars');

module.exports = {
  cart: [],

  total: function () {
    return this.cart.map(item => item.price).reduce((a, b) => a + b, 0)
  },

  addToCart: function (car) {
    this.cart.push(car)
    // this.total += car.price
  },

  removeFromCart: function (car) {
    this.cart = this.cart.filter(item => item !== car)
    // this.total -= car.price
  },

  checkout: function () {

  }
};