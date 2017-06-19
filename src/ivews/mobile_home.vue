<template>
	<div class="mobile-home">
		<mobile-head></mobile-head>
		<carousel></carousel>	
		<mobile-list></mobile-list>
		<back-top></back-top>
		<mobile-foot></mobile-foot>
	</div>
</template>

<script>
	import mobileHead from '@/components/mobile_page_head'
	import carousel from '@/components/carousel'
	import mobileList from '@/components/mobile_product_list'
	import mobileFoot from '@/components/mobile_page_foot'
	import backTop from '@/components/back_top'

	export default {
		name: 'mobile-home',
		components: { mobileHead, carousel, mobileFoot,backTop,mobileList},
		data() {
			return {
				msg: '欢迎来到多组合页面'
			}
		}
	}
</script>

<style>

</style>