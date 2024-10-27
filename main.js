const app = Vue.createApp({
    data: function() {
        return {
            product: {
                name: 'Socks Blue',
                description: 'These are the best socks you have ever seen'
            },
            image: './assets/images/socks_blue.jpg',
            url: 'https://google.com',
            inStock: true,
            allowToDeleteFromCart: false,
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {id: 2234, color: 'blue', image: './assets/images/socks_blue.jpg'},
                {id: 2235, color: 'red', image: './assets/images/socks_red.jpg'}
            ],
            sizes: ['39-42', '43-45', '46-48'], 
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.allowToDeleteFromCart = true
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        delFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
            if (this.cart == 0) {
                this.allowToDeleteFromCart = false
            }
        }
    }
})