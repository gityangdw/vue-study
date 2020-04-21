<template>
  <div>
      <mt-button @click="getres">axios提交</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods: {
    getres(){
        console.log('aa')
        this.$axios.get('api/getimageinfo/').then(res=>{
          console.log(res)
        })
      }
  },
}
</script>

<style>

</style>