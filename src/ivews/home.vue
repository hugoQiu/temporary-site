<template>
	<div class="home">
		<page-head></page-head>
		<carousel></carousel>		
		<product-list></product-list>
		<back-top></back-top>
		<page-foot></page-foot>
		<login></login>
	</div>	
</template>

<script>
import pageHead from '@/components/page_head'
import pageFoot from '@/components/page_foot'
import carousel from '@/components/carousel'
import backTop from '@/components/back_top'
import productList from '@/components/product_list'
import login from '@/components/login'


	export default {
		name: 'home',
		components: { pageHead,carousel,productList,backTop,login,pageFoot },
		data() {
			return {
				msg: '欢迎来到多组合页面'
			}
		}
	}
</script>

<style>
</style>