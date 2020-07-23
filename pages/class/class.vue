<template>
	<view>
		<view class="" v-for="(item,index) in ClassData" :key="index">
			<RecommendTop>{{item.classname}}</RecommendTop>
			<ClassItem :child="item.child"></ClassItem>
		</view>
	</view>
</template>

<script>

import RecommendTop from '../../common/RecommendTop'
import ClassItem from '../../components/class/ClassItem'

import { getClass } from '../../network/class'
	
	export default {
		data() {
			return {
				ClassData: []
			}
		},
		onLoad() {
			this.getClassInfo()
		},
		methods: {
			getClassInfo(){
				getClass().then(res => {
					console.log(res)
					if(res[1].data.msg === "OK"){
						for(let i of res[1].data.data){
							this.ClassData.push(i)
						}
					}
				})
			}
		},
		components: {
			ClassItem,
			RecommendTop
		}
	}
</script>

<style>

</style>
