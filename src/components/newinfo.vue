<template>
    <div>
        <div class="title">
            <h3>{{ newinfo.title }}</h3>
            <p>
                <span>发表时间:{{ newinfo.add_time | dateFormat}}</span>
                <span>点击{{newinfo.click }}次</span>
            </p>
        </div>
        <div class="content" v-html="newinfo.content">
            
        </div>
        <subcom-box :id="id"></subcom-box>
    </div>
</template>

<script>
import subcom from './subcom.vue'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            id: this.$route.params.id,
            newinfo:{}
        }
    },
    created(){
        this.getInfo(this.id)
    },
    methods:{
        getInfo(id){
            this.$http.get('api/getnew/'+this.id).then(res=>{
                console.log(res.body.message);
                if(res.body.status===0){
                    this.newinfo = res.body.message[0]
                }else{
                    Toast('失败')
                }
                
            })
        }
    },
    components:{
        'subcom-box': subcom
    }

}
</script>

<style scoped>
.title{
    border-bottom: 1px solid #ccc;
}
.title h3{
    font-size: 16px;
    color: #f00;
    text-align: center;
    margin-top: 10px;
}
.title span{
    color: blue;
    font-size: 14px;
}
.title p{
    display: flex;
    justify-content:space-between;
}
</style>