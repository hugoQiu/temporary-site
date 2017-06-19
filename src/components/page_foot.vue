<template>
	<div class="foot">
		<div class="foot-detail">
			<Row class="foot-width">
				<Col span="8" class="bd-foot">
					<h2>Subscribe</h2>
					<p>Be the first to know about our latest products.</p>
					<div class="submit-info">
						<input type="text" />
						<button>Submit</button>
					</div>
					<div class="foot-img">
						<img src="../assets/foot_img1.png" />
						<img src="../assets/foot_img2.png" />
						<img src="../assets/foot_img3.png" />
						<img src="../assets/foot_img4.png" />
					</div>
				</Col>
				<Col span="8" class="bd-foot">
				<h2>SUPPORT</h2>
				<p>Warranty</p>
				<p>Download</p>
				<h2 class="top-height">ABOUT US</h2>
				<p>Our Company</p>
				<p>Super User</p>
				</Col>
				<Col span="8" class="bd-foot">
					<Row >
						<Col span="8" class="right-img"><img src="../assets/foot_img5.png" /></Col>
						<Col span="16" class="text-left">
							<h2>PHONE:</h2>
							<p>(United States) 1-888-456-8468<br> (PST) 9am - 5pm, Mon to Fri<br> (Germany) 49-04101-8189266<br> (CEST) 9am - 5pm, Mon to Fri<br></p>
							<h2 class="top-height">MAIL:</h2>
							<p>support@taotronics.com<br>marketing@taotronics.com</p>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>

		<Row class="foot-identify">
			<Col span="12">Copyright © 2017 xxx Co. Limited</Col>
			<Col span="12">
			<font>Please select a language</font>
			<Dropdown>
				<a href="javascript:void(0)">
					English
					<Icon type="arrow-down-b"></Icon>
				</a>
				<Dropdown-menu slot="list">
					<Dropdown-item>中文</Dropdown-item>
					<Dropdown-item>Deutsch</Dropdown-item>
				</Dropdown-menu>
			</Dropdown>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		name: 'foot'
	}
</script>

<style>
	.foot {
		color: #FFFFFF;
	}
	
	.text-left{text-align: left;}
	
	.text-left p{
		font-size: 0.85em;
	}
	
	.foot .foot-detail {
		background: #54545c;
		padding: 2em 0;
	}
	
	.foot .foot-detail .foot-width {
		width: 65%;
		margin: 0 auto;
	}
	
	.bd-foot{ border-right:1px solid rgba(255, 255, 254, 0.6) ;}
	.bd-foot:last-child{border: none;}
	
	.foot .foot-detail .submit-info {
		width: 89%;
		margin: 1em auto;
		background: #FFFFFF;
	}
	
	.foot .foot-detail .submit-info input {
		width: 72%;
		height: 2em;
		line-height: 2em;
		border: none;
	}
	
	.foot .foot-detail .submit-info button {
		background: #75b0b4;
		color: #FFFFFF;
		width: 26%;
		height: 2em;
		line-height: 2em;
		border: none;
		float: right;
	}
	
	.foot .foot-detail .foot-img {
		width: 20em;
		margin: 0 auto;
		text-align: left;
	}
	
	.foot .foot-detail .foot-img img {
		width: 3em;
		margin-right: 0.5em;
	}
	
	.top-height {
		margin-top: 1em;
	}
	
	.foot .foot-detail .right-img img{width: 4em;}
	
	.foot .foot-identify {
		background: #46464d;
		padding: 1em 0;
	}
	
	.foot .foot-identify a {
		margin-left: 0.5em;
		color: #FFFFFF;
	}
</style>