<template>
    <div>
        <router-link to="/account/login">login</router-link>
        <router-link to="/account/register">register</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    body{
        div{
             font-style: italic   
        }
    }
</style>