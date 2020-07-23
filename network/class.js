import { DayUrl } from './index'

// 获取分类总列表
export function getClass(){
	return uni.request({
		method: 'GET',
		url: DayUrl + 'api/book',
	})
}

// 获取列表详情（子目录）
export function getClassDetail(a){
	return uni.request({
		method: 'POST',
		url: DayUrl + 'api/classlist',
		data: {
			cid: a
		},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}