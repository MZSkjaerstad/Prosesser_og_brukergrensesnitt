import Vuex from 'vuex'
import {store as articles} from './modules/articles/store'
import {store as navigation} from './modules/navigation/store'
import {store as pages} from './modules/pages/store'
import {store as books} from './modules/books/store'
import {store as journal} from './modules/journal/store'

export const store = new Vuex.Store ({
	modules: {
		articles,
		navigation,
		pages,
		books,
		journal
	}
})