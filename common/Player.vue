<template>
	<view class="player">
		<view class="player_lrc">
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="player_lrc_item" v-for="(item,index) in lrc1" :key='index'>{{item + '.'}}</view>
				<p class="player_lrc_p">-----------</p>
				<view class="player_trant" v-for="(i,index) in trant" :key="index">
					{{i}}
				</view>
			</scroll-view>
		</view>
		<audio :src="Mp3" :poster="poster" :name="name" :author="author"  controls></audio>
	</view>
</template>

<script>
	
import { getLrc,getMp3,getTrans } from '../network/common'
	
export default{
	data(){
		return {
			Mp3: '',
			Lrc: '',
			lrctxt: '',
			lrctxt1: [],
			lrc1: [],
			poster: '',
			name: '',
			author: '',
			trant: []
		}
	},
	onLoad(parms) {
		// console.log(parms)
		this.Mp3 = parms.mp3
		this.Lrc = parms.lrc
		this.poster = parms.pic
		this.name = parms.title
		this.author = parms.author
		this.getRec(this.Lrc,this.Mp3)
	},
	methods: {
		getRec(a,b){
			getLrc(a).then(res => {
				// console.log(res)
				if(res[1].statusCode === 200){
					this.lrctxt = res[1].data
				}
				// console.log(this.lrctxt)
				const lines = this.lrctxt.split("\n")
				const pattern = /\[\d{2}:\d{2}.\d{2}\]/g
				// console.log(lines)
				for(let i of lines){
					let o = i.replace(/\[\d{2}:\d{2}.\d{2}\]/g,'')
					o = o.replace(/(\W|by:СeӢ��www.en8848.com.cn)+/g,' ')
					this.lrctxt1.push(o)
				}
				// console.log(this.lrctxt1)
				this.getTran()
			})
			// getMp3(b).then(res => {
			// 	console.log(res)
			// })
		},
		// 获取翻译
		getTran(){
			for(let i = 1; i<this.lrctxt1.length; i++){
				// console.log(this.lrctxt1[i])
				getTrans(this.lrctxt1[i]).then(res1 => {
					console.log(res1[1])
					if(res1[1].data.content.out != ""){
						this.trant.push(res1[1].data.content.out)
					}
				})
			}
		}
	},
	computed: {
		parseLrc(){
			for(var z = 1; z < this.lrctxt1.length; z++){
				this.lrc1.push(this.lrctxt1[z])
			}
		}
	},
	components: {
	}
}
</script>

<style>
	.player_lrc_item{
		width: 100%;
		padding-left: 5px;
		font-size: 13px;
		background-color: #F2F1D7;
		margin-bottom: 10px;
	}
	audio{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
	}
	.scroll-view{
		position: fixed;
		top: 0;
		bottom: 67px;
	}
	.player_lrc_p{
		text-align: center;
	}
	.player_trant{
		width: 100%;
		padding-left: 5px;
		font-size: 13px;
		background-color: #F2F1D7;
		margin-top: 10px;
	}
</style>