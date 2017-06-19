<template>
	<div class="category">
		<page-head></page-head>
		<carousel></carousel>
		<product-type></product-type>
		<category-list></category-list>
		<back-top></back-top>
		<page-foot></page-foot>
	</div>
</template>

<script>
	import pageHead from '@/components/page_head'
	import pageFoot from '@/components/page_foot'
	import carousel from '@/components/carousel'
	import backTop from '@/components/back_top'
	import productType from '@/components/product_type'
	import categoryList from '@/components/category_list'

	export default {
		name: 'category',
		components: { pageHead, carousel, productType, backTop, pageFoot, categoryList },
		data() {
			return {
				msg: '欢迎来到多组合页面'
			}
		}
	}
</script>

<style>

</style>