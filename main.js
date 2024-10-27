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
            onSale: true
        }
    }
})