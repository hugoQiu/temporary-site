<template>
    <div class="goods">
        <div class="referral">
            <p>Model: XX-XX001</p>
            <h2>Flex Earbud headphones, Dual EQ Modes Wired Stereo In-ear headphones earbuds with mic</h2>
            <Rate disabled allow-half show-text v-model="valueCustomText">
                Score:{{ valueCustomText }}
                <span style="color: #85c1c5">(50 Customer Reviews)</span>
            </Rate>
    
            <div class="amazon">
                <img src="../assets/amazon.png" />
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
        </div>
    
        <div class="referral">
            <!--评分-->
            <span>GreatHeadphones</span>
            <Rate disabled allow-half v-model="valueCustomText"></Rate>
            <p>By JRoberson on 2016-06-12</p>
            <p>Full disclosure: I was asked to provide an unpaid, unbiased review of these headphones by TaoTronics directly. I am not affiliated with TaoTronics, Amazon, or the seller in any way other than to provide this review. After having used them for a few days, this is that review. These headphones arri</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'goods',
        data() {
            return {
                valueText: 3.5,
                valueCustomText: 3.5
            }
        }
    }
</script>

<style>
.referral {
    width: 85%;
    margin:2em auto;
    text-align: left;
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
    margin-right: 0.5em;
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
</style>                    