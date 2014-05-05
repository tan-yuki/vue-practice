new Vue({
    el: '#main',

    data: {
        items: [
            {name: 'cookie'},
            {name: 'candy'}
        ]
    },

    methods: {
        highlight: function(item) {
            item.$el.style.backgroundColor = 'red';
        },
        clear: function(item) {
            item.$el.style.backgroundColor = 'transparent';
        }
    }

});
