<template>
  <div class="news">
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in newlist" :key="index">
					<router-link :to="'/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3 v-html="item.title"></h3>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dateFormat }}</span>
                                <span>点击: {{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li>	

			</ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            newlist:[]
        }
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(response=>{
            console.log(Response.body)
            if(response.body.status===0){
                this.newlist = response.body.message
            }else{
                Toast('获取失败')
            }
        })}
    },
    created(){
        this.getNewsList()
    }

}
</script>

<style scoped>
.mui-table-view li h3{
    font-size: 14px;
}
.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}


</style>