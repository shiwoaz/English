import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

import getters from './getters'
import mutations from './mutation'

const store = new vuex.Store({
	state: {
		a: 4,
		openid: null
	},
	getters,
	mutations
})

export default store