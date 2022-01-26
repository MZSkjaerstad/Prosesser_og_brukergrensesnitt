const state = {
	navigation: [
		{title: 'Announcement', routerLink:'/announcement'},
		{title: 'Journal', routerLink:'/journal'},
		{title: 'Architecture', routerLink:'/architecture'},
		{title: 'Video & Film', routerLink:'/video&film'},
		{title: 'Live', routerLink:'/live'},
		{title: 'Notes', routerLink:'/notes'},
		{title: 'Books', routerLink:'/books'},
		{title: 'Projects', routerLink:'/projects'},
		{title: 'Podcasts', routerLink:'/podcasts'},
	]
}

const getters = {
	getNavigation: state => state.navigation
}

export const store = {
	state,
	getters
}