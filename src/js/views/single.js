import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container text-center">
			
			{store.charactersList.map(item => 
				<div className="container text-center" style={{width: "18rem"}}>

					<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
						</div>
						<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away" across multiple fictional eras, in which humans and many species of aliens co-exist with robots typically referred to in the films as 'droids', which may be programmed for personal assistance or battle.</p>
						</div>
						</div>
					</div>
					</div>

					<div className="row g-1 color-red">

						<div className="d-block">
							<h6>Name</h6>
							<p>{item.name}</p>
						</div>

						<div className="d-block">
							<h6>Birth Year</h6>
							<p>{item.birth_year}</p>
						</div>

						<div className="d-block">
							<h6>Gender</h6>
							<p>{item.gender}</p>
						</div>

						<div className="d-block">
							<h6>Height</h6>
							<p>{item.height}</p>
						</div>

						<div className="d-block">
							<h6>Skin Color</h6>
							<p>{item.skin_color}</p>
						</div>

						<div className="d-block">
							<h6>Eye Color</h6>
							<p>{item.eye_color}</p>
						</div>

					</div>
				</div>
			)}
			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
