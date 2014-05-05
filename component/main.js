new Vue({
    el: '#main',

    data: {
        name: "Parent"
    },

    components: {
        sub: { // <- あたかもVueのコンストラクタ引数の様に扱える
            data: {
                name: "Sub"
            }
        }
    }

});
