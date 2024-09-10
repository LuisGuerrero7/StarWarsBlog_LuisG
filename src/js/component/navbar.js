import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {actions,store} = useContext(Context)
	console.log(store.favorites)
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-black">
			<Link to="/">
				<span className="navbar-brand h1 m-4">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" style={{height: "80px", width: "140px"}}/>
				</span>
			</Link>
					
					<div className="dropdown m-4" style={{paddingRight: "70px"}}>
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">

							{
								store.favorites.map(
									(item,index) => (
										<li key={index}>
											<p className="dropdown-item">
												{item}
												<button 
												onClick={ () => actions.removeFavorite(item)}
												>
													<i className="fa-solid fa-trash"></i>
												</button>
											</p>										
										</li>
									)
								)
							}
						</ul>
					</div>
		</nav>
	);
};
