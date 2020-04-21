<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="count" ref="num"/>
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
        console.log(this.max)
    },
    props:['max'],
    methods: {
        count(){
            
            this.$emit('getcount',parseInt(this.$refs.num.value))
        }
    },
    watch:{
        'max':function(newvalue,oldvalue){
            mui('.mui-numbox').numbox().setOption('max',newvalue)
        }
    }
}
</script>

<style>

</style>