<template>
	<div class="detials">
		<page-head></page-head>
		<div style="text-align: left; width: 67.5%; margin: 0 auto;">
			<font>
				<a>Home</a>></font>
			<font>
				<a>Products</a>></font>
			<font>
				<a>Sound & Vision</a>
			</font>
		</div>
	
		<Row class="introduction" style="text-align: left; width: 75%; margin: 0 auto;">
			<Col span="12">
			<div class="handover">
				<dt>
					<img src="../assets/carousel.jpg" />
				</dt>
				<dd class="intr-dtl">
					<button class="btn-left">
						<</button>
							<div class="handover-info">
								<span>1</span>
								<span>2</span>
								<span>3</span>
								<span>4</span>
								<span>5</span>
								<span>6</span>
								<span>7</span>
								<span>8</span>
							</div>
							<button class="btn-right">></button>
				</dd>
			</div>
			</Col>
			<Col span="12" class="intr-value">
			<p>Model: XX-XX001</p>
			<h2>Flex Earbud headphones, Dual EQ Modes Wired Stereo In-ear headphones earbuds with mic</h2>
			<Rate show-text v-model="valueCustomText">
				Score:{{ valueCustomText }}
				<span style="color: #85c1c5">(50 Customer Reviews)</span>
			</Rate>
			<div>
				<div>
					<img src="../assets/amazon.png" />
				</div>
				<div>Price:
					<span>$39.99</span>
				</div>
			</div>
	
			<div class="nation">
				<p>Choose your country</p>
				<button>United States</button>
				<button>Canada</button>
				<button>United Kingdom</button>
			</div>
	
			<div class="tone">
				<font>Color: </font>
				<p>
					<span></span>
					<span></span>
				</p>
			</div>
			<div class="describe">
				<li>
					<span></span>
					<p>ENHANCED BASS EQ MODE: Instantly switch between natural sound and enhanced bass at any moment – enjoy unbeatable sound performance with deep and rich bass.</p>
				</li>
				<li>
					<span></span>
					<p>POWERFUL DUAL 8mm DRIVERS: Two powerful 8mm drivers deliver clean, natural, and well-balanced sound that is perfect for daily commuting, traveling, and tuning out the noises of life.</p>
				</li>
				<li>
					<span></span>
					<p> CONVENIENT HANDS-FREE CALLING: Answer and end calls directly with the earphones. Along with access to Siri and Android voice assistance, you’ll never need to reach for your smartphone.</p>
				</li>
				<li>
					<span></span>
					<p> FULL INLINE MUSIC CONTROL: Buttons to control music and conversation is at your fingertips - play/pause, volume control, track control, answer/reject/end phone calls.</p>
				</li>
				<li>
					<span></span>
					<p> MAXIMUM COMFORT AND DURABILITY: Light aluminum alloy earbuds provide all-day comfort; oxygen-free copper wiring blocks interference for better-sounding audio; durable thermoplastic elastomer cable stands the wear-and-tear of life</p>
				</li>
			</div>
			</Col>
		</Row>
	
		<Tabs type="card">
			<Tab-pane label="Overview">标签一的内容</Tab-pane>
			<Tab-pane label="Specifications / Download">标签二的内容</Tab-pane>
			<Tab-pane label="FAQ">标签三的内容</Tab-pane>
		</Tabs>
	
		<div class="evaluate">
			<!--评分-->
			<span>GreatHeadphones</span>
			<Rate v-model="valueCustomText"></Rate>
			<p>By JRoberson on 2016-06-12</p>
			<p>Full disclosure: I was asked to provide an unpaid, unbiased review of these headphones by TaoTronics directly. I am not affiliated with TaoTronics, Amazon, or the seller in any way other than to provide this review. After having used them for a few days, this is that review. These headphones arri</p>
		</div>
	
		<page-foot></page-foot>
	</div>
</template>

<script>
import pageHead from '@/components/page_head'
import pageFoot from '@/components/page_foot'
import login from '@/components/login'

export default {
	name: 'detials',
	components: { pageHead, login, pageFoot },
	data() {
		return {
			valueText: 3,
			valueCustomText: 3.8
		}
	},
	methods: {
		init(id) {

		}
	},
	mounted() {
		this.init()
	}
}
</script>

<style>
.introduction .intr-value {
	text-align: left;
}

.introduction .handover {
	width: 100%;
}

.introduction .handover dt {
	width: 80%;
	margin: 0 auto;
}

.introduction .handover dt img {
	width: 100%;
}

.intr-dtl {
	width: 80%;
	margin: 0 auto;
	position: relative;
}

.intr-dtl .handover-info {
	display: inline-block;
	overflow: hidden;
	height: 3em;
	line-height: 3em;
	position: absolute;
	width: 80%;
	left: 10%;
}

.intr-dtl .handover-info span {
	display: inline-block;
	width: 23%;
	margin-right: 1%;
	border: 1px solid #42B983;
	height: 3em;
	line-height: 3em;
	text-align: center;
}

.intr-dtl .btn-left {
	position: absolute;
	left: 0;
	width: 2em;
	height: 3em;
}

.intr-dtl .btn-right {
	position: absolute;
	right: 0;
	width: 2em;
	height: 3em;
}

.describe span {
	display: inline-block;
	width: 6px;
	height: 6px;
	background: #333333;
	border-radius: 50%;
}

.describe p {
	display: inline-block;
	margin-left: 1.2em;
	margin-top: -1.35em;
}

.tone {
	margin: 1em 0;
}

.tone p {
	margin: -1.4em 0 0 3em;
}

.tone span {
	display: inline-block;
	width: 1.25em;
	height: 1.25em;
	background: #2C3E50;
	margin-left: 0.5em;
}

.nation {
	margin: 1em 0 0 0;
}

.nation button {
	background: #999;
	color: #FFFFFF;
	border: none;
	margin: 0 0 0.5em 0.5em;
	padding: 0.25em 1em;
	border-radius: 0.25em;
}

.ivu-tabs-nav-scroll {
	width: 60%;
	margin: 0 auto;
}

.evaluate{
	text-align: left;
	width:75%;
	margin: 2em auto;
}
</style>