const state = {
	articles: [
		{
			id: 'daniel-01',
			author: 'Daniel Birnbaum',
			title: 'Mutual Aid, Social Distancing, and Dual Power in the State of Emergency',
			picture: './assets/images/article_3.jpeg',
			caption: 'Cover of Obieg 12: “The Speed of Guccifer.” The studio of TV UNU in the Romanian city of Râmnicu Vâlcea (a.k.a. Hackerville). Photo: Nicoleta Moise.',
			text_1: 'In my 2016 article “Algo-ritmo,” I hyphenated the Spanish word for algorithm, creating a portmanteau consisting of the words “something” and “rhythm.”1 I played off the word “rhythm” to speak to what Derrida calls iterability in speech acts. Derrida argues that what makes speech acts effective are their iterability, that is, their repetition with alterity. For Derrida, it is alterity that enables conditions of possibility as opposed to determination—conditions of play. What McKittrick calls for in “Mathematics Black Life” is an alternative reading of the enumeration of colonial and anti-Black violence that renders an other-wise2 understanding, one that is based on an onto-epistemology that accounts for Black survival and those who lived.',
			text_2: 'McKittrick’s focus on the “contours of Black life” as well as my focus on the “ritmo” of algo-ritmo imply patterns or rhythms that I would like to focus on here. I will argue that these patterns or rhythms are where the art or poethics of quantification lie. This is particularly important given that I will argue that algorithmic governance is a process of recursive rhythms and patterns. These rhythms and patterns are what preemptively shape a racializing affect, or what Jasbir Puar calls “slow life and debility.”3 I argue that algorithmic governance is made up of a system of modulating diffractive mechanisms (or diffractive modulators) that seek to compress the information patterns and rhythms of the world. Here, I see the potential of a poethics of other-wise diffractive patterns toward rerouting the onto-epistemology of the recursive system of algorithmic governance. I turn to algorithmic governance first.',
			text_3: 'Since World War II, societies have been shifting from systems of institutional enclosures that discipline citizens’ ways of being to systems of infinite and continuous modulating mechanisms, which generatively control access to institutions and human behavior.4 Digital technologies and the “internet of things” have enabled increasingly distributed logics, rationalities, and practices of governance via cybernetic systems of communication and predictive control. While sovereign, discipline, and control technologies of capture continue to exist in concert, it is increasingly control that becomes the dominant logic of systems of governance.',
			text_4: 'Within this context of cybernetic systems of governance, control has become the guaranteed form of “truth.” That is, the assured path to “truth” is to shape the futurity of “truth” in the present. Thus, rather than try to prevent or deter the existence of what is empirically verifiable, cybernetic systems of control work via a play on temporality that manufactures a becoming-assemblage such as an event, organization, or body in the form of a threat, an anxiety, or desire to mold futurity in the present (or present futurity). In other words, regardless of whether a becoming-assemblage is empirically or objectively verifiable, a future event is constructed based on already existing predispositions or beliefs. The operative logic for such an environment of manufactured futurity is preemptive action.'
		},

		{
			id: 'krysztof-01',
			author: 'Krzysztof Gutfranski',
			title: 'The Institute of the Cosmos',
			picture: '/assets/images/article_1.jpeg',
			caption: 'Liz Craft, She is looking at me, 2015. Ceramic, aluminium, 84 x 82 x 12 cm.',
			text_1: 'The Polish magazine Obieg (Circuit) was launched in 1987, beginning as a bulletin; its name was a reference to a “third circuit” of publications that the magazine itself attempted to forge: autonomous from the dictates of the state, yet also distinct from the publications produced by the “official” political opposition, including the Solidarity movement and associated groups. The publication soon became one of the only periodicals in Polish to offer space for alternative communities and ideas; quickly, it grew into a trusted information guide and platform for exchanging what would become crucial historical perspectives and concepts. As Poland underwent seismic political changes, so did the magazine. In the 1990s, it was no longer a bulletin, but rather transformed into a fully fledged publication funded by the Ujazdowski Castle Centre for Contemporary Art (CCA Ujazdowski). Briefly suspended in 2002, the magazine resumed online in 2004. Notwithstanding that after a decade and a half it became aligned with a museum—a state institution after all—it retained autonomy to publish what it had always pursued.',
			text_2: 'I was the editor of Obieg from January 2016 until July 2020. On my watch, Obieg stopped exclusively publishing reviews of the Polish art scene (2004–2015), to the dismay of the Warsaw art world. But we were adamant: our aim was to connect with the international world of art, to enrich the local scene rather than function merely as a self-serving echo chamber of a publicly funded exhibition venue, with the “usual suspects” tooting their own horns. The vast majority of Obieg ’s readers from Poland and beyond were art professionals, students in their early twenties, and others appreciative of our longer reads.',
			text_3: 'The editorial team rose to the challenge of rebranding the magazine so that it spoke about art all over the world but from the perspective of Warsaw and Central-Eastern Europe, producing a globally oriented, bilingual publication, while also negotiating the complex situation of being funded by a Polish public institution subordinate to the Ministry of Culture and National Heritage. The journal kept away from adverts, short formats, and gossip. Its ambition—at a time when borders seemed to be closing again rather than opening and when the language of art had become standardized—was to reach out to the world with a message of openness. Key to Obieg’s formula was the imperative to upgrade the art map of Central and Eastern Europe, aiming to make the “peripheries” visible.',
			text_4: 'We produced fifteen issues online, publishing over two hundred texts, essays, and visual pieces commissioned for the magazine; more than 50 percent of the contributors—unusually for Poland—were female. The fact that Obieg was bilingual meant that it had two distinct audiences: the Polish and Warsaw art scenes, and the wider international art world. We experimented with the language of art criticism, drawing on the legacy of the early Obieg of the 1980s and ’90s. Unusual for the era of clickbait, we rejected the fodder of mass appeal, ambitiously opting for themed issues and in-depth formats without a paywall to encourage access. We surfed on the stormy seas of theory, always in search of honest and accessible ways of writing about art and culture. We chose to forego commercial success and media hype for the sake of establishing and developing non-obvious, yet precious, connections.',
			text_5: 'Despite our meagre budget, we managed to increase our fees for authors—regardless of their celebrity status or passport—as well as the fees for translators, guest editors, and all freelancers involved, to increase our reach and international community. Because of this, I believe, we were successful. After writing an essay for Obieg, someone from Lagos was granted a stipend in Johannesburg. Someone else came up with the idea of a biennial in northern Chile. New projects were conceived in Kyiv, Rijeka, Vilnius, and many other places. Channeled through Warsaw, people and ideas connected in fruitful collaboration.'
  		}
	],

	navigation: [
		{title: 'Announcement', routerLink:'/'},
		{title: 'Journal', routerLink:'/'},
		{title: 'Architecture', routerLink:'/'},
		{title: 'Video & Film', routerLink:'/'},
		{title: 'Live', routerLink:'/'},
		{title: 'Notes', routerLink:'/'},
		{title: 'Books', routerLink:'/'},
		{title: 'Projects', routerLink:'/'},
		{title: 'Podcasts', routerLink:'/'},
	]
}

const getters = {
	getArticles: state => state.articles,
	getArticleById: state => (id) => {
		const article = state.articles.filter((article)=> article.id === id)
		return article[0]
	},
	getNavigation: state => state.navigation
}

export const store = {
	state,
	getters
}