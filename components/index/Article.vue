<template>
    <view class="article">
    	<RecommendTop class="article_top">
			每日英语
		</RecommendTop>
		<view v-for="(item,index) in article" :key="index" class="article_box" @click="toPlayer(item.mp3url,item.mp3lrc,item.title,item.pclassname,ImgPic)">
			<h2 class="article_box_h2">{{item.title}}</h2>
			<p class="article_box_p">{{item.small_text}}</p>
			<span class="article_box_span">{{item.pclassname}}</span>
			<image class="article_box_img" :src="url + item.pic" mode=""></image>
		</view>
    </view>
</template>

<script>
	
import RecommendTop from '../../common/RecommendTop'
	
export default {
	props:{
		article: {
			type: [Array,Object]
		}
	},
	components: {
		RecommendTop
	},
	data(){
		return {
			url: 'http://www.en8848.com.cn'
		}
	},
	methods: {
		toPlayer(e,f,g,h,i){
			uni.navigateTo({
				url: '../../common/Player' + '?mp3=' + e + '&lrc=' + f + '&title=' + g + '&author=' + h + '&pic=' + i,
			})
		}
	},
}
</script>

<style>
	.article_top{
		margin-bottom: 10px;
	}
	.article{
		overflow: hidden;
		width: 100%;
	}
	.article_box{
		padding-top: 5px;
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		border-bottom: solid .1px #d3d3d3;
		padding-bottom: 5px;
	}
	.article_box_h2{
		font-size: 13px;
		font-weight: bold;
	}
	.article_box_p{
		font-size: 10px;
		float: left;
		width: 75%;
		color: #c5c5c5;
		margin-top: 5px;
	}
	.article_box_img{
		/* float: right; */
		width: 20%;
		height: 50px;
		margin-left: 5px;
		margin-top: 5px;
	}
	.article_box_span{
		float: left;
		width: 30%;
		font-size: 11px;
		/* border: solid .2px lightsalmon; */
		color: #acacac;
		margin-left: 5px;
		margin-top: 7px;
	}
</style>