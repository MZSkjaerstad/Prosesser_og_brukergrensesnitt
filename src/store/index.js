import Vuex from 'vuex'
import {store as articles} from './modules/articles/store'

export const store = new Vuex.Store({
	modules: {
		articles
	}
})