<template>
    <view class="search_box">
		<view class="search">
			<input type="text" v-model.lazy="key" value=""/>
			<image src="../../static/img/index/search.png" mode="" @click="getSearchInfo(key)"></image>
		</view>
		<view class="search_item">
			<view class="BeforeS" v-if="isShow == 2">
				<p>请输入关键词</p>
			</view>
			<view class="SearchSu" v-else-if="isShow == 1">
				<view class="SearchSu_item" v-for="(item,index) in Res" :key='index'>
					<p class="item_title">{{item.title}}</p>
					<p class="item_info">{{item.pclassname}}</p>
				</view>
			</view>
			<view class="SearchFa" v-else>
				fail
			</view>
		</view>
    </view>
</template>

<script>
	
import { getSearch,getSearchMore } from '../../network/indexP'
	
export default {
	data(){
		return {
			isShow: 2,
			key: null,
            Res: null,
            Lid: null
		}
	},
	methods: {
		getSearchInfo(a){
			getSearch(a).then(res => {
				console.log(res)
				if(res[1].data.status === 404){
					this.isShow = 3
				}else{
					this.isShow = 1
					this.Res = res[1].data.data
					console.log(this.Res)
				}
			})
		},
		getLastid(){
			for(let i in this.Res){
				this.Lid = this.Res[i].id
			}
		},
		getMoreInfo(b,c){
			getSearchMore(b,c).then(res => {
				console.log(res)
				if(res[1].data.msg === "OK"){
					for(let i of res[1].data.data){
						this.Res.push(i)
					}
					// this.Res.push(res[1].data.data)
					console.log(this.Res)
				}else{
					uni.showToast({
						title: '无更多内容'
					})
				}
			})
		}
	},
	onReachBottom(){
        this.getLastid()
        console.log(this.Lid);
		this.getMoreInfo(this.key,this.Lid)
	}
}
</script>

<style>
	.search{
		display: flex;
		justify-content: center;
	}
	.search input{
		border: solid 1px !important;
		border-radius: 7px;
	}
	.search image{
		width: 24.4px;
		height: 24.4px;
	}
	.search_item{
		position: relative;
		width: 100%;
		/* overflow: hidden; */
	}
	.BeforeS{
		position: absolute;
		top: 50px;
		/* margin: auto; */
		text-align: center;
		width: 100%;
	}
	.SearchSu{
		margin-top: 10px;
	}
	.SearchSu_item{
		border-bottom: solid .1px #C8C7CC;
	}
	.item_title{
		margin-top: 2px;
		margin-left: 3px;
	}
	.item_info{
		margin-bottom: 2px;
		margin-top: 4px;
		font-size: 12px;
		margin-left: 3px;
	}
</style>