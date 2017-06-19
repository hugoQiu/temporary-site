<template>
	<div class="mobile-head-detail">
		<Row>
			<Col span="8" class="btn-menu"><img src="../assets/2.png" /></Col>
			<Col span="8" class="menu-logo"><img src="../assets/6.png" /></Col>
			<Col span="8" class="btn-search"><img src="../assets/5.png" /></Col>
		</Row>

		<Row class="mobile-menu" style="display: none;">
			<Col span="8">
				<ul class="first-menu">
					<li class="pitch-on">Products</li>
					<li>Support</li>
					<li>Sign In / Register</li>
				</ul>
			</Col>
			<Col span="8" class="last-menu">
				<ul>
					<li>Products</li>
					<li>Support</li>
					<li>Sign In / Register</li>
					<li>Products</li>
					<li>Support</li>
					<li>Sign In / Register</li>
				</ul>
			</Col>
		</Row>
	</div>
</template>

<script>
</script>

<style>
	.mobile-head-detail {
		background: #66b1b6;
		padding: 0.5em 1em;
	}
	
	.mobile-head-detail .btn-menu {
		text-align: left;
	}
	
	.mobile-head-detail .btn-menu img {
		width: 25%;
	}
	
	.mobile-head-detail .menu-logo img {
		width: 64%;
	}
	
	.mobile-head-detail .btn-search {
		text-align: right;
	}
	
	.mobile-head-detail .btn-search img {
		width: 25%;
	}
	
	.mobile-head-detail .mobile-menu {
		width: 92%;
		position: absolute;
		top: 7%;
		left: 0;
		z-index: 99;
	}
	
	.mobile-menu .first-menu {
		background: #f6f6f6;
	}
	
	.mobile-menu .last-menu {
		width: 10em;
		background: #FFFFFF;
	}
	
	.mobile-menu .first-menu li {
		padding: 0.6em 0;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.mobile-menu .first-menu .pitch-on {
		background: #FFFFFF !important;
	}
	
	.mobile-menu .last-menu li {
		padding: 0.6em 0;
		border-bottom: 1px solid #CCCCCC;
		width: 80%;
		margin: 0 10%;
	}
	
	.mobile-menu .first-menu li:last-child,
	.mobile-menu .last-menu li:last-child {
		border: none;
	}
</style>