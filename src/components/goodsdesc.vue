<template>
  <div class="goodsdesc">
      <h3>{{ info.title }}</h3>
      <div class="contentd" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            info:{}
        }
    },
    created(){
        this.getgoodsdesc()
    },
    methods: {
        getgoodsdesc(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(res=>{
                this.info = res.body.message[0]
            })
        }
    },
}
</script>

<style lang="scss" scoped>

    
    .contentd{
            padding: 0 5px;
            img {
                width: 100%;
            }
        }
    h3{
        font-size: 16px;
        text-align: center;
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
        color: #226aff;
    }
    
</style>