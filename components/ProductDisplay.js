app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-show="onSale">{{ onSaleTitle }}</p>
                <p v-show="inStock">Enough products available</p>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
                <p v-else>Out of Stocks</p>
                <p>Shipping: {{ shipping }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div 
                    v-for="variant, index in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    v-bind:style="{ backgroundColor: variant.color}">
                </div>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>
                <button class="button" v-on:click="addToCart" v-bind:disabled="!inStock" v-bind:class="{ disabledButton: !inStock }">Add to Cart</button>
                <button class="button" v-on:click="delFromCart" v-bind:disabled="!allowToDeleteFromCart" v-bind:class="{ disabledButton: !allowToDeleteFromCart }">Delete from Cart</button>
            </div>
            <a v-bind:href="url">Link to Google</a>
        </div>
    </div>`,
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
            sizes: ['39-42', '43-45', '46-48']
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
            this.allowToDeleteFromCart = true
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        delFromCart() {
            this.$emit('del-from-cart', this.variants[this.selectedVariant].id)
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})