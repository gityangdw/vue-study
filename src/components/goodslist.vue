<template>
    <div class="goodslist">
        <!-- <router-link class="gooditem" v-for="(item, index) in goodslist" :key="index" :to="'/goodsinfo/'+item.id" tag="div"> -->
        <div class="gooditem" v-for="(item, index) in goodslist" :key="index" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h3>{{ item.title }}</h3>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
            
        </div>
        <mt-button type="danger" size="large" @click="add">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageindex:1,
            goodslist:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(res=>{
                if(res.body.status==0){
                    this.goodslist = this.goodslist.concat(res.body.message)
                }
            })
        },
        add(){
            this.pageindex++
            this.getGoodsList()
        },
        goDetail(id){
            this.$router.push({ name: 'goodsinfo', params: { id: id }})
        }
    },
}
</script>

<style scoped>
    .goodslist{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
    }
    .gooditem{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height:293px;
        
    }
    .gooditem img{
        width: 100%;
    }
    .gooditem h3{
        font-size: 14px;
    }
    .info{
        background-color: #eee;
    }
    .info p{
        margin: 0;
        padding: 5px;
    }
    .info .now{
        color: #f00;
        font-size: 16px;
        font-weight: bold;
    }
    .info .old{
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 5px;
    }
    .sell{
        display: flex;
        justify-content: space-between;
    }
</style>