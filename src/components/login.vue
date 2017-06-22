<template>
	<div class="login-panel">
		<div class="login-content">
			<div class="login-detail">
				<div class="login-input"><label>Email:</label><input type="text" placeholder="Confirm password 6-15 characters in" /></div>
				<div class="login-input"><label>Password:</label><input type="password" placeholder="Confirm password 6-15 characters in" /></div>
				<div class="login-hint">
					<p>
						<a href="javascript:void(0)">Forgot?</a>
					</p>
					<p>Don't have an account yet?
						<a href="javascript:void(0)">Register Now</a>
					</p>
				</div>

				<button class="primary">Sign in</button>
				<p>OR</p>
				<button class="primary">Facebook</button>
				<button class="primary">Google+</button>
				<button class="primary">amazon</button>
			</div>

			<div class="btn-close"><img src="" /></div>

		</div>
	</div>
</template>

<script>
</script>

<style>
	.login-panel {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 99;
	}
	
	.login-panel .login-content {
		width: 40%;
		margin: 0 auto;
		background: #FFFFFF;
		padding: 6em 2em 3em;
		position: relative;
	}
	
	.login-input {
		width: 100%;
		margin-bottom: 1em;
	}
	
	.login-input label {
		width: 20%;
		text-align: right;
		font-size: 1.2em;
		font-weight: bold;
		display: inline-block;
		color: #353535;
	}
	
	.login-input input {
		margin-left: 1em;
		width: 60%;
		border: 1px solid #d3d4d4;
		height: 2.5em;
		line-height: 2.5em;
		border-radius: 0.2em;
		padding: 0 0.25em;
	}
	
	.btn-close {
		width: 2.5em;
		height: 2.5em;
		border-radius: 50%;
		background: #2a5456;
		border: 1px solid #2a5456;
		position: absolute;
		top: 1em;
		right: 1em;
	}
	
	.login-hint {
		width: 60%;
		margin: 0 auto;
	}
	
	.login-hint p {
		text-align: left;
		line-height: 2em;
	}
	
	.primary {
		background: #66b1b6;
		border: none;
		color: #ffffff;
		width: 20%;
		padding: 0.35em 0;
		border-radius: 0.35em;
		margin: 0.5em 0;
	}
</style>