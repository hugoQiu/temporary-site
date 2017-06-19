<template>
	<div class="register">
		<page-head></page-head>
		<h1 class="h1-tit">Create an account</h1>
		<register-module></register-module>
		<page-foot></page-foot>		
	</div>
</template>

<script>
	import pageHead from '@/components/page_head'
	import pageFoot from '@/components/page_foot'
	import registerModule from '@/components/register_module'

	export default {
		name: 'register',
		components: { pageHead,registerModule,pageFoot},
		data() {
			return {
				msg: '欢迎来到多组合页面'
			}
		}
	}
</script>

<style>
.h1-tit{width: 100%; margin: 2em auto;}
</style>