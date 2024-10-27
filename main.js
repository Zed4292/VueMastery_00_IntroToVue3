const app = Vue.createApp({
    data: function() {
        return {
            product: {
                name: 'Socks Blue',
                description: 'These are the best socks you have ever seen'
            },
            selectedVariant: 0,
            url: 'https://google.com',
            brand: 'Vue Mastery',
            allowToDeleteFromCart: false,
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {id: 2234, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50},
                {id: 2235, color: 'red', image: './assets/images/socks_red.jpg', quantity: 0}
            ],
            sizes: ['39-42', '43-45', '46-48'], 
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.allowToDeleteFromCart = true
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        delFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
            if (this.cart == 0) {
                this.allowToDeleteFromCart = false
            }
        }
    
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product.name
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleTitle() {
            return this.brand + ' ' + this.product.name + ' is on sale'
        }
    }
})