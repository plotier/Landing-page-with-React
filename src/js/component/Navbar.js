import React from "react";

//create your first component
export function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Home
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link" href="#">
							Guitarristas
						</a>
						<a className="nav-link" href="#">
							Bajistas
						</a>
						<a className="nav-link" href="#">
							Bateristas
						</a>
						<a className="nav-link" href="#">
							Tecladistas
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
