<template>
	<view class="classdetail">
		<view class="classdetail_item" v-for="(item,index) in detailList" :key="index" v-if="item.name != null" @click="toDetail(item.cid)">
			<image class="classdetail_item_img" :src="Iurl + item.pic" mode="" v-if="item.pic !== None"></image>
			<image v-else src="../../static/img/error/er.png" class="classdetail_item_img" mode=""></image>
			<p class="classdetail_item_title">{{item.name}}</p>
			<span class="classdetail_item_info">{{item.intro}}</span>
		</view>
	</view>
</template>

<script>

import { DayUrlp } from '../../network/index'
import { getClassDetail } from '../../network/class'

	export default {
		data() {
			return {
				cid: '',
				detailList: [],
				Iurl: DayUrlp,
				None: "/static/images/0.png"
			}
		},
		onLoad(par) {
			console.log(par)
			this.cid = par.cid
			this.getClassD()
		},
		methods: {
			getClassD(){
				getClassDetail(this.cid).then(res => {
					console.log(res)
					if(res[1].data.msg === "OK"){
						// for(let i of res[1].data.data){
						// 	console.log(i)
						// 	this.detailList.push(i)
						// }
						this.detailList = res[1].data.data
					}
				})
			},
			toDetail(a){
				uni.navigateTo({
					url: '../../common/Detail?ccid=' + a
				})
			}
		},
		
	}
</script>

<style>
	.classdetail_item{
		position: relative;
		width: 100%;
		overflow: hidden;
		/* display: flex; */
		border-bottom: solid .2px #ACACAC;
		padding-bottom: 5px;
		margin-top: 5px;
	}
	.classdetail_item_img{
		width: 100px;
		height: 130px;
		float: left;
		margin-top: 5px;
		margin-left: 8px;
		border-radius:8px;
		/* border-radius:10px; */
		/* flex: .3; */
	}
	.classdetail_item_title{
		position: absolute;
		font-size: 15px;
		font-weight: 500;
		left: 116px;
		top: 5px;
	}
	.classdetail_item_info{
		font-size: 12px;
		color: #C5C5C5;
		position: absolute;
		top: 59px;
		left: 116px;
		height: 60px;
		line-height: 15px;
		overflow: hidden;
	}
	.ImgNone{
		background-color: #007AFF;
	}
</style>
