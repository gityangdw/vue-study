<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="num" @change="count" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'
export default {
    data(){
        return {
           
        }
    },
    mounted() {
        mui('.mui-numbox').numbox()
        //console.log(this.max)
    },
    props:['num','id'],
    methods: {
        count(){
            console.log(this.$refs.numbox.value);
            
            let goods = {id:this.id,count:this.$refs.numbox.value}
            this.$store.commit('updateCount',goods)
        }
    },
}
</script>

<style>

</style>