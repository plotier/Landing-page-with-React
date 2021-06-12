import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron mx-auto">
			<h1 className="display-4">Guitarristas técnicos</h1>
			<p className="lead">
				Guitarristas técnicos y virtuosos que han compartido escenario
				con grandes compositores.
			</p>
			<hr className="my-4"></hr>
			<p>
				Aunque todos se desempeñan muy bien con guitarras acusticas,
				destacan por el uso de instrumentos electricos.
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="https://es.wikipedia.org/wiki/Guitarra_el%C3%A9ctrica"
				role="button">
				Guitarras electricas.
			</a>
		</div>
	);
}

//cierre en hr
