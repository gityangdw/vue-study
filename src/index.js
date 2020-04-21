console.log('ok');
import Vue from 'vue'
import router from './router.js'
//导入axios
import axios from 'axios'
Vue.prototype.$axios = axios
var car = JSON.parse(localStorage.getItem('car') || '[]')
//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0,
      car:car
    },
    mutations: {
        addToCar(state,goodsinfo){
            let flag=false
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateCount(state,goodscount){
            state.car.some(item=>{
                if(item.id==goodscount.id){
                    item.count=parseInt(goodscount.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removegoods(state,id){
            state.car.some(item=>{
                if(item.id == id){
                    state.car.splice(item,1)
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        increment (state) {
            state.count++
        },
        selectchange(state,obj){
            state.car.forEach(item=>{
                if(item.id==obj.id){
                    item.selected = obj.selected
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters:{
        getAllcount(state){
            let c = 0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        },
        getGoodscount(state){
            let o = {}
            state.car.forEach(item=>{
                o[item.id] = item.count
            })
            return o
        },
        getswitch(state){
            let o = {}
            state.car.forEach(item=>{
                o[item.id] = item.selected
            })
            return o 
        },
        getcountandamount(state){
            let obj = {
                count:0,
                price:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    obj.count+=item.count
                    obj.price+=obj.count*item.price
                }
            })
            return obj
        }
    }
  })
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component('mt-header', Header)
// Vue.component('mt-swipe', Swipe)
// Vue.component('mt-swipe-item', SwipeItem)
// Vue.component('mt-button', Button)
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//vue-preview
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// monentjs
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
  })
//  console.log(moment().format())
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
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
    router,
    store

})
