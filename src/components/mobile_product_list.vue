<template>
	<div class="product">

		<Row class="product-list">
			<Col span="12">
				<div class="product-detail">
					<dt><img src="../assets/list_img.png" /></dt>
					<dd>
						<p>Flex Earbud headphonesFlex Earbud headphonesFlex Earbud headphonesFlex Earbud headphones</p>
						<div>
							<font>Color:</font>
							<span class="cl-span"></span>
							<span></span>
						</div>
						<div class="money">$120</div>
						<button>Lean More</button>
					</dd>
				</div>
			</Col>
			<Col span="12">
				<div class="product-detail">
					<dt><img src="../assets/list_img.png" /></dt>
					<dd>
						<p>Flex Earbud headphonesFlex Earbud headphonesFlex Earbud headphonesFlex Earbud headphones</p>
						<div>
							<font>Color:</font>
							<span class="cl-span"></span>
							<span></span>
						</div>
						<div class="money">$120</div>
						<button>Lean More</button>
					</dd>
				</div>
			</Col>
			<Col span="12">
				<div class="product-detail">
					<dt><img src="../assets/list_img.png" /></dt>
					<dd>
						<p>Flex Earbud headphonesFlex Earbud headphonesFlex Earbud headphonesFlex Earbud headphones</p>
						<div>
							<font>Color:</font>
							<span class="cl-span"></span>
							<span></span>
						</div>
						<div class="money">$120</div>
						<button>Lean More</button>
					</dd>
				</div>
			</Col>
			<Col span="12">
				<div class="product-detail">
					<dt><img src="../assets/list_img.png" /></dt>
					<dd>
						<p>Flex Earbud headphonesFlex Earbud headphonesFlex Earbud headphonesFlex Earbud headphones</p>
						<div>
							<font>Color:</font>
							<span class="cl-span"></span>
							<span></span>
						</div>
						<div class="money">$120</div>
						<button>Lean More</button>
					</dd>
				</div>
			</Col>
		</Row>
		
		<div class="more-list"><button>More</button></div>
	</div>
</template>

<script>
</script>

<style>
	.product-list {
		width: 90%;
		margin: 0 auto 2em;
	}
	
	.product-list .product-detail {
		width: 100%;
		margin: 1em auto;
	}
	
	.product-list .product-detail dt img {
		width: 100%;
	}
	
	.product-list .product-detail dd p {
		line-height: 1.5em;
	}
	
	.product-list .product-detail dd span {
		border: 1px solid #ccc;
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
	}
	
	.product-list .product-detail dd .cl-span{
		background: #CCCCCC;
	}
	
	.product-list .product-detail .money{
		font-size: 1.5em;
		font-weight: bold;
		color: #66b1b6;
	}
	.product-detail button{
		background: #66b1b6;
		color: #FFFFFF;
		border: none;
		padding:0.25em 1em;
	}
	
	.product-detail button:focus{
		border: none;
	}
	
	.more-list{
		margin-bottom: 1em;
	}
	.more-list button{
		background: #4b8586;
		color: #FFFFFF;
		border: none;
		width: 35%;
		padding: 0.2em 0;
		font-size: 1.5em;
	}
</style>