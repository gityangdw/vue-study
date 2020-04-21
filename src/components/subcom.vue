<template>
    <div class="pinglun">
        <h3>评论</h3>
        <textarea placeholder="请输入你的内容" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>
        <ul class="mui-table-view">
            <li class="cell" v-for="(item, index) in comments" :key="index">
                <h1>第{{index+1}}楼 用户名:{{ item.user_name}} 发表时间:{{ item.add_time | dateFormat}}</h1>
                <p>{{ item.content }}</p>
            </li>

        </ul>
        <mt-button type="danger" size="large" plain @click="add">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            pageindex:1,
            comments:[],
            msg:'',
            
        }
    },
    created(){
        this.getcomment()
    },
    methods:{
        getcomment(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(res=>{
                console.log(res.body.message)
                if(res.body.status===0){
                    this.comments = this.comments.concat(res.body.message)
                    console.log(this.comments+'ccoddd')
                }else{
                    Toast('失败')
                }
            })
        },
        add(){
            this.pageindex++
            this.getcomment()
        },
        postcomment(){
            if(this.msg.trim().length===0){
                return Toast("不能为空")
            }
            this.$http.post('api/postcomment/'+this.id,{content:this.msg}).then(res=>{
                if(res.body.status===0){
                    this.comments.unshift({user_name:'匿名',add_time:new Date(),content:this.msg})
                }else{
                    Toast('上传失败')
                }
            })
        }
    },
    props:['id']
}
</script>

<style scoped>
    .pinglun h3{
        font-size: 16px;
        padding-left: 5px;
    }
    .pinglun textarea{
        height: 100px;
        font-size: 14px;
    }
    .pinglun li{
        
        font-size: 12px;
    }
    .pinglun li h1{
        font-size: 14px;
        background-color: #bbb;
    }
    .mui-table-view{
        margin: 0 5px;
    }
</style>