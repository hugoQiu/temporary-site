import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/ivews/home'
import category from '@/ivews/category'
import register from '@/ivews/register'
import details from '@/ivews/details'
import mobile from '@/ivews/mobile_home'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/hello',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/category',
			name: 'category',
			component: category
		},
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/details',
			name: 'details',
			component: details
		},
		{
			path: '/mobile',
			name: 'mobile',
			component: mobile
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})