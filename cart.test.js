const cars = require('./data/cars')
let cart = require('./cart')

let c = Object.assign({}, cart)
c.cart = []
 
afterEach(() => {
    c.cart = []
})

describe('Cart Properties', () => {
    test('Cart cart is empty array', () => {
        cart = Object.assign({}, c)
        expect(Array.isArray(cart.cart)).toBe(true)
        expect(cart.cart.length).toBe(0)
    })
    test('cart total is 0', () => {
        cart = Object.assign({}, c)
        expect(cart.total()).toBe(0)
    })
})

describe('Cart Methods', () => {
    test('add to cart', () => {
        cart = Object.assign({}, c)
        for (let i = 0; i < 10; i++) {
            expect(cart.cart.length).toBe(i)
            cart.addToCart(cars[i])
            expect(cart.cart[cart.cart.length - 1]).toBe(cars[i])
        }
    })
    test('remove from cart', () => {
        cart = Object.assign({}, c)
        console.log(c, cart)
        expect(cart.cart.length).toBe(0)
        for (let i = 0; i < 10; i++) {
            cart.addToCart(cars[i])
        }
        for (let i = 0; i < 10; i++) {
            expect(cart.cart.length).toBe(10 - i)
            cart.removeFromCart(cars[i])
            expect(cart.cart.includes(cars[i])).toBe(false)
        }
    })
    test('total should increment', () => {
        cart = Object.assign({}, c)
        expect(cart.cart.length).toBe(0)
        cart.addToCart(cars[9])
        expect(cart.total()).toBe(cars[9].price)
        cart.addToCart(cars[4])
        expect(cart.total()).toBe(cars[9].price + cars[4].price)
    })
    test('total should decrement', () => {
        cart = Object.assign({}, c)
        total = 0
        for (let i = 0; i < 10; i++) {
            cart.addToCart(cars[i])
            total += cars[i].price
        }
        expect(cart.total()).toBe(total)
        for (let i = 0; i < 10; i++) {
            cart.removeFromCart(cars[i])
            total -= cars[i].price
            expect(cart.total()).toBe(total)
        }
    })
})
