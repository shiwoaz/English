<template>
	<view class="">
		<!-- 顶部搜索框 -->
		<Header class="header">
			<img class="header_img" slot="left" src="../../static/img/index/search.png" alt="" @click='toSearch'>
			<img class="header_img" slot="right" src="../../static/img/index/bl.png" alt="">
		</Header>
		<!-- 轮播图 -->
		<swiper class="swiper_banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="rgba(255, 255, 255, 1)" indicator-active-color="rgba(255,255,255,.3)">
			<swiper-item v-for="(i,index) in Banner" :key="index">
				<view class="swiper-item">
					<image class="swiper_img" :src="i.banner" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 介绍 -->
		<Recommend :Recommend="Recommend"></Recommend>
		<!-- 文章 -->
		<Article :article='Article'></Article>
	</view>
</template>

<script>

import Header from '../../components/index/Header'
import Recommend from '../../components/index/Recommend'
import Article from '../../components/index/Article'

import { getBanner,getRecommend,getArticle,getArticleMore } from '../../network/indexP'

	export default {
		data() {
			return {
				Banner: null,
				Recommend: null,
				Article: null,
				last: null
			}
		},
		onLoad() {
			getBanner().then(res => {
				this.Banner = res[1].data.Data
				// console.log(this.Banner)
			}),
			getRecommend().then(res => {
				this.Recommend = res[1].data.data[0]
				// console.log(res)
			}),
			getArticle().then(res => {
				this.Article = res[1].data.data
				// console.log(this.Article)
			})
		},
		methods: {
			toSearch(){
				uni.navigateTo({
					url: './search'
				})
			},
			getLastid(){
				for(let i in this.Article){
					this.last = this.Article[i].id
				}
			},
			getMoreA(){
				// console.log(this.last)
				getArticleMore(this.last).then(res => {
					// console.log(res)
					if(res[1].data.msg === 'OK'){
						for(let i of res[1].data.data){
							this.Article.push(i)
						}
					}
				})
			}
		},
		components: {
			Header,
			Recommend,
			Article
		},
		onReachBottom() {
			// console.log(11)
			// setTimeout(() => {
			// 	uni.showToast({
			// 		title: "没有更多信息！"
			// 	})
			// },500)
			this.getLastid()
			this.getMoreA()
		}
	}
</script>

<style>
	.header{
		width: 100%;
		height: 20px;
		margin-top: 5px;
		margin-bottom: 10px;
	}
	.header_img{
		width: 20px;
		height: 20px;
	}
	.swiper_banner{
		width: 95%;
		margin: 0 auto;
		margin-bottom: 10px;
	}
	.swiper_img{
		width: 100%;
		height: 150px;
	}
	Recommend{
		margin-top: 10px;
	}
</style>
