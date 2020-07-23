<template>
	<view class="take">
		<RecommendTop>我的订阅</RecommendTop>
		<!-- {{go}} {{isLo}}<button type="default" @click="q">a++</button> -->
		<view class="take_item" v-if="!isLo">
			您还未登录
		</view>
		<view class="take_item" v-else>
			1
		</view>
	</view>
</template>

<script>
	
import RecommendTop from '../../common/RecommendTop'

	export default {
		data() {
			return {
				isLo: '',
			}
		},
		onLoad() {
			// console.log(uni.getStorageSync('openid'))
			
		},
		onShow() {
			this.changeOpid()
			// console.log(this.$store.state.openid)
			this.isLo = this.$store.state.openid
			
		},
		methods: {
			changeOpid(){
				this.$store.commit('getOpenid')
			},
			q(){
				this.$store.commit('add')
				console.log(this.$store.state.a)
			}
		},
		components: {
			RecommendTop
		},
		computed: {
			go(){
				return this.$store.state.a
			}
		}
	}
</script>

<style>

</style>
