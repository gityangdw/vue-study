<template>
    <div class="container">
        <!-- 顶部 -->
        <mt-header fixed title="固定在顶部"></mt-header> 
        <h3>123</h3>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    created(){
        
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
    .container{
        padding-top: 20px;
    }
</style>