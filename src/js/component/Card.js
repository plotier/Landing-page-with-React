import React from "react";

export function Card(props) {
	return (
		<div className="card col-3 m-2 mx-auto" style={{ width: "18rem" }}>
			<img src={props.imgSrc} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.web} target="_blank" className="btn btn-primary">
					{props.botonDes}
				</a>
			</div>
		</div>
	);
}

//cierre en img
