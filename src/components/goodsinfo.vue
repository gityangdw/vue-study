<template>
  <div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
      >
          <div class="ball" v-show="flag" ref="ball"></div>
      </transition>
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :picList="lunbo" :isfull="isfull"></swiper>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>市场价: <del>￥{{ goodsinfo.market_price}}</del> <span class="now">￥{{ goodsinfo.sell_price}}</span></p>
                        <p>购买数量: <numbox @getcount="getSelectCount" :max="goodsinfo.stock_quantity"></numbox></p>
                        
                        <mt-button type="primary" size="small" >立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
                        
					</div>
				</div>
				
			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{ goodsinfo.goods_no}}</p>
						<p>库存情况:{{ goodsinfo.stock_quantity}}</p>
						<p>上架时间: {{goodsinfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" @click="goComment(id)">商品评价</mt-button>
                </div>
			</div>
  </div>
</template>

<script>
import swiper from './swiper.vue'
import numbox from './numbox.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbo:[],
            isfull:false,
            goodsinfo:{},
            flag:false,
            count:1
        }
    },
    created(){
        this.getlunbo(),
        this.getGoodsInfo()
    },
    methods: {
        getSelectCount(num){
            this.count = num
            console.log(this.count)
        },
        getlunbo(){
            this.$http.get('api/getthumimages/'+this.id).then(res=>{
                res.body.message.forEach(element => {
                    element.img = element.src
                });
                this.lunbo = res.body.message
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(res=>{
                this.goodsinfo = res.body.message[0]
            })
        },
        goDesc(id){
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goComment(id){
           this.$router.push({name:'goodscomment',params:{id}}) 
        },
        add(){
            this.flag = !this.flag;
            let goodinfo = {
                id:this.id,
                count:this.count,
                price:this.goodsinfo.sell_price,
                selected:true
            }
            this.$store.commit('addToCar',goodinfo)
        },
        beforeEnter: function (el) {
            el.style.transform="translate(0,0)"
            // ...
        },
        // 当与 CSS 结合使用时
        // 回调函数 done 是可选的
        enter: function (el, done) {
            el.offsetHeight
            const ball = this.$refs.ball.getBoundingClientRect()
            const gou = document.getElementById("gou").getBoundingClientRect()
            const x = gou.left - ball.left
            const y = gou.top - ball.top
            el.style.transform=`translate(${x}px,${y}px)`
            el.style.transition = "all 1s ease"
            // ...
            done()
        },
        afterEnter: function (el) {
            this.flag = !this.flag
            // ...
        },
    },
    components:{
        swiper,
        numbox
    }
}
</script>

<style scoped>
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 389px;
    left: 143px;
    z-index: 100;
    background-color: red;
}
.now{
    color: red;
}
.mui-card-footer{
    display: block;
}
.mui-card-footer button{
    margin:15px 0;
}
</style>