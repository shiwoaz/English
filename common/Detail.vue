<template>
	<view class="detail">
		<view class="detail_top">
			<!-- 封面图片 -->
			<image class="detail_top_img" :src="ImgPic" mode="" v-if="ImgPic != None"></image>
			<image class="detail_top_img" v-else src="../static/img/error/er.png" mode=""></image>
			<!-- 题目 -->
			<p class="detail_top_title">{{ClassName}}</p>
			<!-- 详细信息 -->
			<p class="detail_top_info">{{ClassInfo}}</p>
			<!-- 订阅按钮 -->
			<button type="default" class="detail_top_button">订阅栏目</button>
		</view>
		<view class="detail_list">
			<!-- 列表标题 -->
			<view class="detail_list_title">
				<p>{{ClassName}}</p>
			</view>
			<!-- 详情列表 -->
			<view class="detail_list_info" v-for="(item,index) in DetailList" :key='index' @click="toPlayer(item.mp3url,item.mp3lrc,item.title,item.pclassname,ImgPic)">
				<p class="detail_list_info_title">{{item.title}}</p>
				<p class="detail_list_info_class">{{item.pclassname}}</p>
			</view>
		</view>
	</view>
</template>

<script>
	
import { getDetailList,getDetailClass,getDetailListMore } from '../network/common'
import { DayUrlp } from '../network/index'
	
export default {
	data(){
		return {
			cid: '',
			ClassName: '',
			ImgPic:  '',
			ClassInfo: '',
			DetailList: '',
			laid: '',
			None: "http://www.en8848.com.cn/static/images/0.png"
		}
	},
	methods: {
		getList(a){
			getDetailList(a).then(res => {
				// console.log(res)
				if(res[1].data.msg === "OK"){
					this.DetailList = res[1].data.data
				}
			})
		},
		getClass(b){
			getDetailClass(b).then(res => {
				// console.log(res)
				if(res[1].data.msg === "OK"){
					this.ClassName = res[1].data.data.name
					this.ImgPic = DayUrlp + res[1].data.data.pic
					this.ClassInfo = res[1].data.data.intro
				}else{
					uni.showToast({
						title: '请求异常!'
					})
				}
			})
		},
		getLastid(){
			for(let i in this.DetailList){
				this.laid = this.DetailList[i].id
			}
			// console.log(this.laid)
		},
		getMore(c,d){
			this.getLastid()
			getDetailListMore(c,d).then(res => {
				// console.log(res)
				for(let i of res[1].data.data){
					this.DetailList.push(i)
				}
				// console.log(this.DetailList)
			})
		},
		toPlayer(e,f,g,h,i){
			uni.navigateTo({
				url: './Player' + '?mp3=' + e + '&lrc=' + f + '&title=' + g + '&author=' + h + '&pic=' + i,
			})
		}
	},
	onLoad(parms) {
		// console.log(parms.ccid)
		this.cid = parms.ccid
		this.getList(parms.ccid)
		this.getClass(parms.ccid)
	},
	onReachBottom() {
		this.getMore(this.cid,this.laid)
	}
}
</script>

<style>
	.detail_top{
		overflow: hidden;
		width: 100%;
		margin-top: 20px;
	}
	.detail_top_img{
		float: left;
		margin-left: 20px;
		width: 80px;
		height: 130px;
		margin-right: 18px;
		border-radius:8px;
	}
	.detail_top_title{
		font-size: 16px;
		font-weight: 700;
	}
	.detail_top_info{
		font-size: 10px;
		color: #C5C5C5;
		margin-top: 15px;
		height: 40px;
		overflow: hidden;
	}
	.detail_top_button{
		margin-top: 20px;
		width: 30%;
		/* height: 20px; */
		font-size: 13px;
	}
	.detail_list_title{
		border-bottom: solid .3px #01AAED;
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-size: 13px;
		margin-top: 20px;
		color: #01AAED;
		position: sticky;
		top: 0;
		z-index: 9;
		background-color: white;
	}
	.detail_list_info{
		border-bottom: solid .2px #C5C5C5;
		width: 100%;
		overflow: hidden;
	}
	.detail_list_info_title{
		margin-top: 8px;
		margin-left: 5px;
		margin-bottom: 8px;
		font-size: 14px;
		font-weight: 500;
	}
	.detail_list_info_class{
		margin-left: 5px;
		font-size: 12px;
		color: #ACACAC;
		margin-bottom: 8px;
	}
</style>