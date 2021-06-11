import React from "react";
import { Navbar } from "./Navbar.js";
import { Card } from "./Card.js";
import { Jumbotron } from "./Jumbotron.js";
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="row">
				<Jumbotron />
			</div>
			<div className="row">
				<Card
					title="Guthrie Govan"
					description="Guthrie Govan es un animal que tocaba con Hans Zimmer"
					imgSrc="https://guitarexperienceradioshow.files.wordpress.com/2012/06/gutrhie-govan-interview-05.jpg"
				/>
				<Card
					title="John Petrucci"
					description="John Petrucci es un animal que toca con Mike Portnoy"
					imgSrc="https://imgsrv2.voi.id/PW_8S1ywxFwP8BQR7EXqdewNSQ-0L1gCY0WynLLc_M4/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNDEwNi8yMDIxMDIxOTEwNDktbWFpbi5jcm9wcGVkXzE2MTM3MDY2MDIuanBn.jpg"
				/>
				<Card
					title="Steve Vai"
					description="Steve Vai es un animal que tocaba con Frank Zappa"
					imgSrc="https://www.futuro.cl/wp-content/uploads/2021/02/15ecb31b0b97e2668d70fc42db3a2280.jpg"
				/>
				<Card
					title="Al Di Meola"
					description="Al Di Meola es un animal que tocaba con Chick Corea y Paco de Lucia"
					imgSrc="https://valenciacity.es/wp-content/uploads/Al-Di-Meola.jpg"
				/>
			</div>
		</div>
	);
}
