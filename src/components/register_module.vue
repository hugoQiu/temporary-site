<template>
	<div class="register-form">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140">
			<Form-item label="Email " prop="mail">
				<Input v-model="formValidate.mail"></Input>
			</Form-item>
			<Form-item label="Password " prop="name">
				<Input v-model="formValidate.name"></Input>
			</Form-item>
			<Form-item label="ConfirmPassword " prop="name">
				<Input v-model="formValidate.name"></Input>
			</Form-item>
			<Form-item label="Country " prop="city">
				<Select v-model="formValidate.city" placeholder="请选择所在地">
					<Option value="beijing">北京市</Option>
					<Option value="shanghai">上海市</Option>
					<Option value="shenzhen">深圳市</Option>
				</Select>
			</Form-item>

			<Form-item label="AmazonPrime " prop="city">
				<Select v-model="formValidate.city" placeholder="请选择所在地">
					<Option value="beijing">北京市</Option>
					<Option value="shanghai">上海市</Option>
					<Option value="shenzhen">深圳市</Option>
				</Select>
			</Form-item>

			<Form-item>
				<Button type="primary" @click="handleSubmit('formValidate')">Register</Button>
				<!--<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>-->   
			</Form-item>
			
			<div>
				<Icon type="android-radio-button-off" class="radio-type"></Icon>
				<p style="display: inline;">Yes, subscribe me to the Sunvalleytek Newsletter for special deals and offers on Sable, RAVPower, HooToo, TaoTronics, and VAVA products.</p>
			</div>
			
			<div>Already have an account? <a>Sign Up now</a></div>
		</Form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				formValidate: {
					name: '',
					mail: '',
					city: ''
				},
				ruleValidate: {
					name: [
						{ required: true, message: '密码不能为空', trigger: 'blur' }
					],
					mail: [
						{ required: true, message: '邮箱不能为空', trigger: 'blur' },
						{ type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
					],
					city: [
						{ required: true, message: '请选择城市', trigger: 'change' }
					]
				}
			}
		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if(valid) {
						this.$Message.success('提交成功!');
					} else {
						this.$Message.error('表单验证失败!');
					}
				})
			},
			//			handleReset(name) {
			//				this.$refs[name].resetFields();
			//			}
		}
	}
</script>

<style>
	.register-form {
		width: 40%;
		margin: 2em auto;
	}
	
	.register-form .radio-type{
		size: 2em;
		margin-left: 2em;
	}
</style>