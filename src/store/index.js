 import Vuex from 'vuex'
import {store as articles} from './modules/articles/store'
import {store as navigation} from './modules/navigation/store'
import {store as pages} from './modules/pages/store'

export const store = new Vuex.Store ({
	modules: {
		articles,
		navigation,
		pages
	}
})