<template>
	<view class="">
		<RecommendTop v-cloak>
			跟外媒学英语
		</RecommendTop>
		<view class="box">
			<view class="box_item" v-for="(item,index) in Recommend.content" :key="index" @click="toDetail(item.cid)">
				<image :src="url + item.pic" mode="" class="box_item_img"></image>
				<p class="box_item_span">{{item.name}}</p>
			</view>
		</view>
	</view>
</template>

<script>

import RecommendTop from '../../common/RecommendTop'
import { DayUrlp } from '../../network/index'
	
export default {
	props:{
		Recommend: {
			type: Object,
			default: null
		}
	},
	components:{
		RecommendTop
	},
	data(){
		return {
			url: DayUrlp
		}
	},
	methods: {
		toDetail(a){
			uni.navigateTo({
				url: '../../common/Detail'+'?ccid='+a
			})
		}
	}
}
</script>

<style>
	[v-cloak]{
		display: none;
	}
	.box{
		display: flex;
		justify-content: space-around;
		width: 100%;
        /* background-color: aqua; */
        margin-top: 5px;
	}
    .box_item{
        width: 80px;
        overflow: hidden;
    }
    .box_item_img{
        width: 80px;
        height: 130px;
		border-radius:8px;
    }
    .box_item_span{
        width: 100%;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
    }
</style>