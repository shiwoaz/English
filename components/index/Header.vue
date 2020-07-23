<template>
	<view class="header">
		<view class="left"><slot name="left"></slot></view>
		<view class="right"><slot name="right"></slot></view>
	</view>
</template>

<script>
export default{

}
</script>

<style>
	.header{
		display: flex;
		justify-content: flex-end;
	}
	.left{
		width: 20px;
		height: 20px;
	}
	.right{
		width: 20px;
		height: 20px;
		margin-left: 12px;
		margin-right: 8px;
	}
</style>
