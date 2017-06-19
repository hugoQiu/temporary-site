<template>
	<div class="head">
		<Row class="head-detail">
			<Col span="10" class="col-height"><img src="../assets/6.png" /></Col>
			<Col span="8" class="col-height">
			<Row>
				<Col span="7" class="pos-chunk">
				<div class="menu-detail"><img src="../assets/2.png" /><label class="float">Products</label></div>
				<div class="menu-list" style="display: none;">
					<ul>
						<li>Fashions</li>
						<li>Bedding sets</li>
						<li>Towels</li>
						<li>Bath room sets</li>
						<li>Living room sets</li>
						<li>Outdoor sets</li>
						<li>Home & Kitchen</li>
					</ul>
				</div>
				</Col>
				<Col span="7" class="pos-chunk">
				<div class="menu-detail"><img src="../assets/3.png" /><label class="float">Support</label></div>
				</Col>
				<Col span="10" class="pos-chunk">
				<div class="menu-detail"><img src="../assets/4.png" class="special-img"/><label class="float">Sign In / Register</label></div>
				</Col>
			</Row>
			</Col>
			<Col span="6" class="col-height col-bg">
			<img src="../assets/5.png" />
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		name: 'head'
	}
</script>

<style>
	.head-detail {
		min-height: 50px;
		background: #66b1b6;
	}
	
	.head-detail .col-height {
		height: 50px;
	}
	
	.head-detail .col-bg {
		background: #4b8586;
		text-align: left;
	}
	
	.head-detail .col-bg img {
		margin-top: 3px;
	}
	
	.head-detail .pos-chunk {
		border-right: 1px solid rgba(255, 255, 255, 0.4);
		position: relative;
		height: 50px;
		left: 0;
	}
	
	.head-detail .pos-chunk:last-child {
		border: none;
	}
	
	.head-detail .pos-chunk .menu-detail {
		height: 50px;
		line-height: 50px;
		color: #fff;
	}
	
	.head-detail .pos-chunk .menu-detail img {
		max-width: 3.5em;
		padding: 3px 0;
	}
	
	.head-detail .pos-chunk .menu-detail .float {
		display: inline-block;
		float: right;
		margin-top: 0;
		margin-right: 30%;
	}
	
	.head-detail .pos-chunk .menu-list {
		position: absolute;
		top: 50px;
		width: 100%;
		z-index: 99;
		background: rgba(255, 255, 255, 0.6);
	}
	
	.head-detail .pos-chunk .menu-list li {
		line-height: 30px;
		border-bottom: 1px solid rgba(255, 255, 254, 0.4);
	}
	
	@media screen and (max-width:1024px) and (min-width:320px) {
		
		.head-detail .pos-chunk .menu-detail img {
			max-width: 20%;
			margin-top: 15%;
		}
		
		.special-img{
			margin-top: 7% !important;
		}
		.head-detail .pos-chunk .menu-detail .float {
			display: inline-block;
			float: right;
			margin-top: 1%;
			margin-right: 10%;
		}
	}
</style>