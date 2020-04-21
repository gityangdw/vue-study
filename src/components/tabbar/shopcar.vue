<template>
  <div class="car">
      <div class="mui-card" v-for="(item, index) in goodslist" :key="index">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getswitch[item.id]" @change="selectchange(item.id,$store.getters.getswitch[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1>{{ item.title}}</h1>
              <span>￥{{ item.sell_price}}</span>
              <carbox :num="$store.getters.getGoodscount[item.id]" :id="item.id"></carbox>
              <a href="#" @click.prevent="remove(item.id)">删除</a>
            </div>
					</div>
				</div>
			</div>


      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="left">
              <p>总计：</p>
              <p>已选择{{$store.getters.getcountandamount.count}}件，总价￥{{$store.getters.getcountandamount.price}}</p>
            </div>
            <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
      
  </div>
</template>

<script>
import carbox from '../carBox.vue'
export default {
    data(){
      return {
        goodslist:[]
      }
    },
    created(){
      this.getGoods()
    },
    methods: {
      getGoods(){
        let idArr = []
        this.$store.state.car.forEach(item=>idArr.push(item.id))
        if(idArr.length==0){
          return 
        }
        this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(res=>{
          this.goodslist = res.body.message
        })
      },
      remove(id){
        console.log('sdd');
        
        this.goodslist.forEach(item=>{
          if(item.id == id){
            this.goodslist.splice(item,1)
          }
        })
        this.$store.commit('removegoods',id)
      },
      selectchange(id,val){
        this.$store.commit('selectchange',{id:id,selected:val})
      }
    },
    components:{
      carbox
    }
}
</script>

<style scoped>
.mui-card .mui-card-content-inner{
  display: flex;
  align-items: center;
}
 .car .info h1{
   font-size: 13px;
 }
 .car img{
   width: 50px;
   height: 50px;
 }
</style>