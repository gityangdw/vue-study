<template>
  <div class="pinfo">
      <h3>{{ info.title }}</h3>
      <div class="subclas">
          <span>发表时间:{{ info.add_time | dateFormat}}</span>
          <span>点击{{ info.click }}次</span>
      </div>
      <div>
        <vue-preview
        :list="list"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
        :previewBoxStyle="{border: '1px solid #eee'}"
        :tapToClose="true"
        @close="closeHandler"
        @destroy="destroyHandler"
        />
  </div>
      <div class="content" v-html="info.content">

      </div>
      <subcom :id="id"></subcom>
  </div>
</template>

<script>
import subcom from './subcom.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            info:{},
            list:[]
        }
    },
    created(){
        this.getphotoinfo()
        this.getThumbs()
    },
    methods:{
        getphotoinfo(){
            this.$http.get('api/getimageinfo/'+this.id).then(res=>{
                if(res.body.status==0){
                    this.info = res.body.message[0]
                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/'+this.id).then(res=>{
                console.log('messg'+res.body.message)
               if(res.body.status==0){
                    res.body.message.forEach(element => {
                        element.w =  600;
                        element.h=400;
                    });
                    this.list = res.body.message
                } 
            })
        },
        // 即将关闭的时候，调用这个处理函数
        closeHandler() {
        console.log('closeHandler')
        },
        // 完全关闭之后，调用这个函数清理资源
        destroyHandler() {
        console.log('destroyHandler')
        }
    },
    components:{
        subcom
    }
}
</script>

<style>
.pinfo h3{
    color: #26a2ff;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
}
.subclas{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    height: 30px;
    
}
.content{
    padding: 10px 10px 0;
    line-height: 20px;
}
</style>