import { BaseUrl } from './index'
import { DayUrl } from './index'

// 获取首页轮播图图片
export function getBanner(){
    return uni.request({
    	method: 'POST',
		url: BaseUrl+'keke/mobile/index.php',
		data:{
			"Version":"4.0",
			"Method":"v9_news_getbannertopic",
			"Params":{
				"banner_type_id":1,
				"flag":1,
			},
		header: {
			 "Content-Type": "application/x-www-form-urlencoded",
			 'Access-Control-Allow-Origin': '*',
			 "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
			 "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
		}
		}
    })
}

// 获取简介
export function getRecommend(){
	return uni.request({
		method: 'POST',
		url: DayUrl+'api/recommend',
	})
}

// 获取文章
export function getArticle(){
	return uni.request({
		method: 'POST',
		url: DayUrl+'api/pages'
	})
}

// 获取更多文章
export function getArticleMore(a){
	return uni.request({
		method: 'POST',
		url: DayUrl+'api/pages',
		data: {
			lastid: a
		},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'

		}
	})
}

// 获取搜索信息
export function getSearch(keywd){
	return uni.request({
		url: DayUrl+'api/search',
		data: {
			keyword: decodeURI(keywd)
		}
	})
}

// 搜索触底加载更多
export function getSearchMore(keywd,last){
	return uni.request({
		url: DayUrl+'api/search',
		data: {
			keyword: decodeURI(keywd),
			lastid: last
		}
	})
}

