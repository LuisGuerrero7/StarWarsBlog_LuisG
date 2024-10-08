import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";

export const Home = () => {

	const {store , actions} = useContext(Context)

	return (
	<div className="text-center mt-5">

		<div className="container gap-3">
			<h1 className="text-start">Characters</h1>
			<div className="row gap-3">
				{store.charactersList.map( item => <div key={item.uid} className="card" style={{width: "18rem"}}>
					<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{item.properties.name}</h5>
						<div className="text-start mb-1">
							<p className="card-text">Gender: {item.properties.gender}</p>
							<p className="card-text">Hair color: {item.properties.hair_color}</p>
							<p className="card-text">Eye-color: {item.properties.eye_color}</p>
						</div>
						<div className="d-flex justify-content-between mt-3">
							<Link className="btn btn-outline-primary" to={`/characters/${item.uid}`}>Learn more!</Link>
							
							<button type="button" className="btn btn-outline-warning" 
								onClick={()=>{
									actions.addFavorite(item.properties.name);
								}}
							>
								{
									store.favorites.includes(item.properties.name) ? 
									"Already in favs" : <i className="fa-regular fa-heart"></i>
								}
							
							</button>
						</div>
					</div>
					</div>
				)}
			</div>
		</div>


		<div className="container gap-3 mt-4 pt-4">
			<h1 className="text-start">Vehicles</h1>
			<div className="row gap-3">
				{store.vehiclesList.map( item => <div key={item.uid} className="card" style={{width: "18rem"}}>
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<div className="text-start mb-1">
							<p className="card-text">Model: {item.model}</p>
							<p className="card-text">Pasengers: {item.passengers}</p>
							<p className="card-text">Pilots: {item.pilots}</p>
						</div>
						<div className="d-flex justify-content-between mt-3">
							<Link className="btn btn-outline-primary" to={`/vehicles/${item.uid}`}>Learn more!</Link>
							<button type="button" className="btn btn-outline-warning" 
								onClick={()=>{
									actions.addFavorite(item.name);
								}}
							>
								{
									store.favorites.includes(item.name) ? 
									"Already in favs" : <i className="fa-regular fa-heart"></i>
								}
							
							</button>
						</div>
					</div>
					</div>
				)}
			</div>
		</div>

		<div className="container gap-3 mt-4" pt-4>
			<h1 className="text-start">Species</h1>
			<div className="row gap-3">
				{store.especiesList.map( item => <div key={item.uid} className="card" style={{width: "18rem"}}>
					<img src={`https://starwars-visualguide.com/assets/img/species/${item.uid}.jpg`} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<div className="text-start mb-1">
							<p className="card-text">Language: {item.language}</p>
							<p className="card-text">Height: {item.average_height}</p>
							<p className="card-text">Lifespan: {item.average_lifespan}</p>
						</div>
						<div className="d-flex justify-content-between mt-3">
							<Link className="btn btn-outline-primary" to={`/species/${item.uid}`}>Learn more!</Link>
							<button type="button" className="btn btn-outline-warning" 
								onClick={()=>{
									actions.addFavorite(item.name);
								}}
							>
								{
									store.favorites.includes(item.name) ? 
									"Already in favs" : <i className="fa-regular fa-heart"></i>
								}
							
							</button>
						</div>
					</div>
					</div>
				)}
			</div>
		</div>

	</div>
	)
};
