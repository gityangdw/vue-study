console.log('ok');
import Vue from 'vue'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import './lib/mui/css/mui.min.css'
import App from './App.vue'
var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    methods:{

    },
    render:c=>c(App),
    //component:{App},

})
