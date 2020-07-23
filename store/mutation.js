export default {
	getOpenid(state){
		state.openid = uni.getStorageSync('openid')
		// console.log(state.openid)
		// console.log(uni.getStorageSync('openid'))
	},
	add(state){
		state.a ++
		// console.log(11)
		// console.log(state.a)
	}
}