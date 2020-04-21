<template>
    <div class="photo">
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">

						<a v-for="(item, index) in cates" :key="index" :class="['mui-control-item',item.id==0 ?'mui-active':'']" @tap="getPhotoListByCateId(item.id)">
							{{ item.title }}
						</a>
						
					</div>
				</div>

			</div>
            <div class="photolist">
                <ul>
                    <router-link v-for="item in list" :key="item.id" :to="'/photoinfo/'+ item.id" tag="li">
                        <img v-lazy="item.img_url">
                        <div class="info">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.zhaiyao }}</p>
                        </div>
                    </router-link>
                </ul>
            </div>
            
    </div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'

export default {
    data(){
        return{
            cates:[],
            list:[]
        }
    },
    methods:{
        getAllCategory(){
            this.$http.get('api/getimgcategory').then(res=>{
                if(res.body.status===0){
                    res.body.message.unshift({title:'全部',id:0})
                    this.cates = res.body.message
                }
            })
        },
        getPhotoListByCateId(cateId) {
      // 根据 分类Id，获取图片列表
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
    },
    created(){
        this.getAllCategory()
        this.getPhotoListByCateId(0)
    },
    mounted() {
       mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    },
}
</script>

<style scoped>
*{
    touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photolist ul{
    
    margin: 0;
    padding:10px 10px 0;
}

.photolist li{
    position: relative;
    list-style: none;
    margin-bottom: 5px;
    box-shadow: 1px 1px 5px #888888;
    background-color: #ccc;
}
.photolist img{
    width: 100%;
    vertical-align: middle;
}
.photolist  img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info{
    color: #fff;
    max-height: 84px;
    text-align: left;
    background: rgba(0, 0, 0, .4);
    position: absolute;
    bottom: 0;
}
.info h3{
    font-size: 16px;
}
.info p{
    font-size: 12px;
}
</style>