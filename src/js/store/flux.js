const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			charactersList : [],
			vehiclesList: [],
			especiesList: [],
			favorites: [],
		},
		actions: {

			addFavorite: (itemName) => {
				console.log(itemName)
				const store = getStore();
				// if(!store.favorites.includes(itemName)){
				// 	setStore({favorites: [...store.favorites, itemName] })
				// }
				setStore({favorites: [...store.favorites, itemName] })
			},

			removeFavorite: (itemName) => {
				const store = getStore();
				setStore({favorites: store.favorites.filter(name => name != itemName )})
			},

			loadCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people")
				const data = await response.json()
				
				const charactersItems = []

				for (let item of data.results){
					const responseCharac = await fetch(item.url)
					const charactersData = await responseCharac.json()
					charactersItems.push(charactersData.result)
					console.log(item)
				}
				setStore({charactersList: charactersItems})
				console.log(charactersItems)
			},

			loadVehicles : () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({vehiclesList: data.results}))
				.catch(err => console.error(err))
			},

			loadEspecies: () => {
				fetch("https://www.swapi.tech/api/species")
				.then(res => res.json())
				.then(data => setStore({especiesList: data.results}))
				.catch(err => console.error(err))
			},
		}
	};
};

export default getState;
