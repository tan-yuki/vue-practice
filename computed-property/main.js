new Vue({
    el: '#main',

    data: {
        items: [
            {name: 'cookie', price: 100},
            {name: 'candy',  price: 60}
        ]
    },

    computed: {
        priceSummary: function() {
            return _.reduce(this.items, function(memo, item) {
                return memo + item.price;
            }, 0);
        }
    }

});
