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
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {id: 2234, color: 'blue'},
                {id: 2235, color: 'red'}
            ],
            sizes: ['39-42', '43-45', '46-48']
        }
    }
})