<template>
	<div class="back">
		<Back-top :height="100" :bottom="200">
			<div class="top"><img src="../assets/back_top.png" /></div>
		</Back-top>
	</div>
</template>

<script>
	export default {
		name: 'back'
	}
</script>

<style>
    .top img{
       width: 4em;
    }
</style>