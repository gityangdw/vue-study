<template>
  <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in picList" :key="index">
            <img :src="item.img" alt="" :class={full:isfull}>
        </mt-swipe-item>
       
    </mt-swipe>
  </div>
</template>

<script>
export default {
    props:['picList','isfull']
}
</script>

<style lang="scss" scoped>
   .mint-swipe{
        line-height: 200px;
        height: 200px;

        .mint-swipe-item{
            text-align: center;
            img{
                height: 100%;
            }
        }
    }
    .full{
        width: 100%;
    }
</style>