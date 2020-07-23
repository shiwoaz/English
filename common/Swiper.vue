<template>
	<view class="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<slot></slot>
			<!-- <swiper-item>
				<view class="swiper-item"></view>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script>
export default {
	data(){
		return {
			
		}
	}
}
</script>

<style>

</style>