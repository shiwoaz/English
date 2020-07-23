import { BaseUrl } from './index'
import { DayUrl,TranUrl } from './index'

// 获取详情列表
export function getDetailList(id){
	return uni.request({
		method: 'POST',
		url: DayUrl+'api/lists',
		data: {
			cid: id,
			lastid: 0
		},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

// 获取类详情
export function getDetailClass(id){
	return uni.request({
		method: 'POST',
		url: DayUrl+'api/class_detail',
		data: {
			cid: id
		},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

// 获取更多
export function getDetailListMore(id,lid){
	return uni.request({
		method: 'POST',
		url: DayUrl+'api/lists',
		data: {
			cid: id,
			lastid: lid
		},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

// 获取lrc文件
export function getLrc(a){
	return uni.request({
		method: 'GET',
		url: a,
		header: {
			'Content-Type': 'text/html; charset=utf-8'
		}
	})
}

// 获取mp3文件
export function getMp3(a){
	return uni.request({
		method: 'GET',
		url: a
	})
}

// 获取翻译
export function getTrans(a){
	return uni.request({
		method: 'GET',
		url: TranUrl + a,
		dataType: 'json',
	})
}