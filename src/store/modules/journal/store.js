const state = {
   journal: [
      {
         title: 'And My Flames Stay Till You Get Out My Way',
         artist: 'April Bey',
         location: 'Museum für Moderne Kunst',
         image: './assets/images/journal_1.jpeg'
      },
      {
         title: 'Crip Time',
         artist: 'Kenny Fries',
         location: 'Vienna Art Week',
         image: './assets/images/journal_2.jpeg'
      },
      {
         title: 'Losing Control',
         artist: 'Alte Pinakothek',
         location: 'Novuyo Moyo',
         image: './assets/images/journal_3.jpeg'
      },
   ]
}


const getters = {
	getJournal: state => state.journal
}

export const store = {
	state,
	getters
}