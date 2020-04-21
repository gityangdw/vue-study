<template>
  <div>
      <comment :id="this.$route.params.id"></comment>
  </div>
</template>

<script>
import comment from './subcom.vue'
export default {
    
    components:{
        comment
    }
}
</script>

<style>

</style>