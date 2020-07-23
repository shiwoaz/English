<template>
</template>

<script>
	export default {
		onLoad() {
			setTimeout(() => {
				uni.switchTab({
					url: './mine'
				})
			},500)
		}
	}
</script>

<style>
</style>
