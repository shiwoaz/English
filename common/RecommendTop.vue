<template>
    <view class="recommendtop">
    	<image src="../static/img/common/list.png" mode="" class="recommendtop_image"></image>
		<slot class="recommendtop_span"></slot>
    </view>
</template>

<script>
export default {

}
</script>

<style>
	[v-cloak]{
		display: none;
	}
	.recommendtop{
		display: flex;
		height: 20px;
		margin-left: 3px;
		font-size: 14px;
		text-align: center;
		color: #01AAED;
	}
	.recommendtop_image{
		width: 20px;
		height: 20px;
	}
</style>