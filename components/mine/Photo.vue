<template>
	<view class="Photo">
		<view class="Photo_item" v-if="!isLogin">
			<image class="Photo_item_img" src="../../static/img/error/er.png" mode=""></image>
			<p class="Photo_item_name"><button class="button" open-type="getUserInfo" @click="getLoginW">登录/注册</button></p>
			<!-- <p class="Photo_item_word">个人签名：</p> -->
		</view>
		<view class="Photo_item" >
			<image class="Photo_item_img" :src="getPhoto" mode=""></image>
			<p class="Photo_item_name">{{getNickName}}</p>
			<!-- <p class="Photo_item_word">个人签名：</p> -->
		</view>
	</view>
</template>

<script>
	
import { wxLogin,getUserInfo,unCode } from '../../network/mine'
	
	export default {
		data() {
			return {
				nickname: '',
				code: '',
				photo: '',
				rawDa: '',
				city: '',
				openid: '',
				session_key: '',
			}
		},
		onLoad() {
			
		},
		computed:{
			isLogin(){
				if(uni.getStorageSync('photo') && uni.getStorageSync('nickname')){
					return true
				}
			},
			getPhoto(){
				return uni.getStorageSync('photo')
			},
			getNickName(){
				return uni.getStorageSync('nickname')
			}
		},
		methods: {
			getLogin(){
				wxLogin().then(res => {
					if(res[1].errMsg === "login:ok"){
						// console.log(res[1])
						this.code = res[1].code
						// console.log(this.code)
						getUserInfo().then(res1 => {
							console.log(res1)
							this.storeInfo(res1)
							// console.log(this.nickname)
							// console.log(this.code)
							this.getUnCode(this.code).then(res2 => {
								// console.log(res2)
								this.openid = res2[1].data.openid
								this.session_key = res2[1].data.session_key
								// console.log(this.openid)
								this.storeOidSkey()
								// console.log(uni.getStorageSync('openid'))
							})
						})
					}
				})
			},
			storeInfo(a){
				if(a[1].errMsg === "getUserInfo:ok"){
					this.nickname = a[1].userInfo.nickName
					this.city = a[1].userInfo.city
					this.rawDa = a[1].rawData
					this.photo = a[1].userInfo.avatarUrl
				}else{
					uni.showToast({
						title: '请重试！'
					})
				}
			},
			getUnCode(b){
				return unCode(b)
			},
			storeOidSkey(){
				uni.setStorageSync('openid', this.openid)
				uni.setStorageSync('session_key', this.session_key)
				uni.setStorageSync('photo', this.photo)
				uni.setStorageSync('nickname', this.nickname)
			},
			roStoreopenid(){
				
			},
			getLoginW(){
				setTimeout(() => {
					this.getLogin()
					// uni.switchTab({
					// 	url: '../../pages/mine/mine',
					// 	fail: (e) => {
					// 		console.log(e)
					// 	}
					// })
					uni.redirectTo({
						url: '../../pages/mine/redir'
					})
				},2000)
			},
		}
	}
</script>

<style>
	.Photo{
		width: 100%;
		/* overflow: hidden; */
		height: 120px;
		/* background-color: #01AAED; */
	}
	.Photo_item{
		position: relative;
		border-bottom: solid .2px #C5C5C5;
	}
	.Photo_item_img{
		position: absolute;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		left: 10%;
		top: 30px;
	}
	.Photo_item_name{
		position: absolute;
		left: 45%;
		top: 30px;
	}
	.Photo_item_word{
		position: absolute;
		left: 45%;
		top: 80px;
		font-size: 12px;
		color: #C0C0C0;
		height: 30px;
		line-height: 15px;
		overflow: hidden;
	}
	.button{
		background-color: #007AFF;
		/* width: 30px;
		height: 20px; */
		font-size: 14px;
	}
</style>
