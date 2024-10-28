const app = Vue.createApp({
    data: function() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        deleteFromCart(id) {
            if (this.cart.length > 0) {
                this.cart.pop()
            }
        }
    }
})