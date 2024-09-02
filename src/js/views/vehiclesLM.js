import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesLM = () => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();   //nos da el numerito de id
	const [item , setItem] = useState(null)

	useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/" + theid)
				.then(res => res.json())
				.then(data => setItem(data.result))
				.catch(err => console.error(err))
            },
        [])

	return (
		<div className="container text-center">

			{item && 
				<div className="container text-center" style={{width: "80%"}}>

					<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
						</div>
						<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{item.properties.name}</h5>
							<p className="card-text" >The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away" across multiple fictional eras, in which humans and many species of aliens co-exist with robots typically referred to in the films as 'droids', which may be programmed for personal assistance or battle.</p>
						</div>
						</div>
					</div>
					</div>

					<div className="row m-3 p-2">
						<div className="d-flex flex-row justify-content-center gap-5">
							<div>
								<h6>Name</h6>
								<p>{item.properties.name}</p>
							</div>

							<div>
								<h6>Model</h6>
								<p>{item.properties.model}</p>
							</div>

							<div>
								<h6>Manufacturer</h6>
								<p>{item.properties.manufacturer}</p>
							</div>

							<div>
								<h6>Cargo capacity</h6>
								<p>{item.properties.cargo_capacity}</p>
							</div>

							<div>
								<h6>Passengers</h6>
								<p>{item.properties.passengers}</p>
							</div>

							<div>
								<h6>Cost in credits</h6>
								<p>{item.properties.cost_in_credits}</p>
							</div>
						</div>
					</div>

				</div>
			}
			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
