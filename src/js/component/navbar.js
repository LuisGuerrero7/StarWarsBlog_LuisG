import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-black">
			<Link to="/">
				<span className="navbar-brand h1 m-4">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" style={{height: "80px", width: "140px"}}/>
				</span>
			</Link>
					
				<Link to="/demo">
					<div className="dropdown m-4">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li><div className="dropdown-item" >Action</div></li>
							<li><div className="dropdown-item" >Another action</div></li>
							<li><div className="dropdown-item" >Something else here</div></li>
						</ul>
					</div>
				</Link>

		</nav>
	);
};
