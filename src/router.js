import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/tabbar/home.vue'
import NewsList from './components/NewsList.vue'
import Member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import newinfo from './components/newinfo.vue'
import photo from './components/photo.vue'
import photoinfo from './components/photoinfo.vue'
import goodslist from './components/goodslist.vue'
import goodsinfo from './components/goodsinfo.vue'
import goodsdesc from './components/goodsdesc.vue'
import goodscomment from './components/goodscomment.vue'
Vue.use(VueRouter)
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {
            path:'/home',
            component:Home,
            
        },
        {path:'/search',component:search},
        {path:'/shop',component:shopcar},
        {path:'/member',component:Member},
        {path:'/newslist',component:NewsList},
        {path:'/newinfo/:id',component:newinfo},
        {path:'/photos',component:photo},
        {path:'/photoinfo/:id',component:photoinfo},
        {path:'/goodslist',component:goodslist},
        {path:'/goodsinfo/:id',component:goodsinfo, name:"goodsinfo"},
        {path:'/goodsdesc/:id',component:goodsdesc, name:"goodsdesc"},
        {path:'/goodscomment/:id',component:goodscomment, name:"goodscomment"},
    ],
    linkActiveClass:'mui-active' //覆盖默认类
})
export default router