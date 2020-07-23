<template>
	<view class="class_item">
		<view class="class_item_i" v-for="(i,index) in child" :key="index" v-if="i.classname != null" @click="toClassDetail(i.classid)">
			{{i.classname}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			child: {
				type: Array
			}
		},
		onLoad() {

		},
		methods: {
			toClassDetail(a){
				uni.navigateTo({
					url: '../../pages/class/classdetail?cid=' + a
				})
			}
		}
	}
</script>

<style>
	.class_item{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.class_item_i{
		width: 25%;
		height: 35px;
		text-align: center;
		line-height: 35px;
		font-size: 12px;
		overflow: hidden;
	}
</style>
