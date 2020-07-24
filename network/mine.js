import { MyUrl } from './index'

// 登录
export function wxLogin(){
	return uni.login({
		provider: 'weixin',
	})
}

// 获取用户信息
export function getUserInfo(){
	return uni.getUserInfo({
		
	})
}

// 请求解密code
// export function unCode(a){
// 	return uni.request({
// 		method: 'GET',
// 		url: 
// 	})
// }

// 请求解密code
export function unCode(a){
	return uni.request({
		method: 'POST',
		url: MyUrl + 'unCode.php',
		data:{
			code: a
		},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

// 存储服务器
export function rStoreOid(id){
	return uni.request({
		method: 'POST',
		url: MyUrl + 'roStoreOid.php',
		data: {
			openid: id
		},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}
