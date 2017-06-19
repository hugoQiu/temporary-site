<template>
	<div class="mobile-foot">
		<div>
			<div style="width: 90%; margin: 0 auto; padding: 1em 0;">
				<h1>Subscribe</h1>
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
			</div>

			<Row>
				<Col span="12"></Col>
				<Col span="12"></Col>
			</Row>
			<div style="width: 90%; margin: 0 auto 1em;">

				<Row>
					<Col span="3" style="margin-left: -0.5em;">
					<img src="../assets/3.png" />
					</Col>
					<Col span="12" style="text-align: left;">
					<h3>PHONE:</h3>
					<p>(United States) 1-888-456-8468<br/> (PST) 9am - 5pm, Mon to Fri<br/> (Germany) 49-04101-8189266<br/> (CEST) 9am - 5pm, Mon to Fri</p>
					</Col>
					<Col span="9" style="text-align: left;">
					<h3>E-MAIL:</h3>
					<p>support@taotronics.com<br/>marketing@taotronics.com</p>
					</Col>
				</Row>
			</div>
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
			</Dropdown>
			</Col>
		</Row>

	</div>
</template>

<script>
</script>

<style>
	.mobile-foot {
		background: #54545c;
		color: #FFFFFF;
	}
	
	.mobile-foot .foot-bottom {
		background: #46464d;
	}
	
	.submit-info {
		width: 76%;
		margin: 1em auto;
		background: #FFFFFF;
	}
	
	.submit-info input {
		width: 72%;
		height: 2.5em;
		line-height: 2.5em;
		border: none;
	}
	
	.submit-info button {
		background: #75b0b4;
		color: #FFFFFF;
		width: 26%;
		height: 2.5em;
		line-height: 2.5em;
		border: none;
		float: right;
	}
	
	.foot-img {
		margin: 1em 0;
	}
	
	.foot-img img {
		width: 10%;
		margin-right: 2.5%;
	}
	
	.foot-identify {
		background: #46464d;
		padding: 1em 0;
	}
	
	.foot-identify a {
		margin-left: 0.5em;
		color: #FFFFFF;
	}
</style>