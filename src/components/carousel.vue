<template>
	<div class="carousel">
		<Carousel autoplay  :autoplay-speed="5000" arrow="always" class="carousel-detail">
			<Carousel-item>
				<div class="demo-carousel"><img src="../assets/carousel.jpg"/></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel"><img src="../assets/carousel.jpg"/></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel"><img src="../assets/carousel.jpg"/></div>
			</Carousel-item>
			<Carousel-item>
				<div class="demo-carousel"><img src="../assets/carousel.jpg"/></div>
			</Carousel-item>
		</Carousel>
	</div>
</template>

<script>
	export default {
		name: 'carousel'
	}
</script>

<style>	
	.carousel-detail .demo-carousel img{ width: 100%;}
</style>