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
			especiesList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
					PARA HOME USAR .DEV PARA LEARN MORE USAR .TECH
				*/
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

			loadLearnMore: () => {
				fetch("https://www.swapi.tech/api/people/1")
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(err => console.error(err))
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

			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
