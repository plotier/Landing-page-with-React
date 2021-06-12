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
					description="Guthrie Govan es un guitarrista británico que tocaba con Hans Zimmer"
					imgSrc="https://guitarexperienceradioshow.files.wordpress.com/2012/06/gutrhie-govan-interview-05.jpg"
					botonDes="Web Guthrie"
					web="https://es.wikipedia.org/wiki/Guthrie_Govan"
				/>
				<Card
					title="John Petrucci"
					description="John Petrucci es un musico norteamericano que toca con Mike Portnoy"
					imgSrc="https://imgsrv2.voi.id/PW_8S1ywxFwP8BQR7EXqdewNSQ-0L1gCY0WynLLc_M4/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNDEwNi8yMDIxMDIxOTEwNDktbWFpbi5jcm9wcGVkXzE2MTM3MDY2MDIuanBn.jpg"
					botonDes="Web Petrucci"
					web="https://es.wikipedia.org/wiki/John_Petrucci"
				/>
				<Card
					title="Steve Vai"
					description="Steve Vai es un guitarrista norteamericano que tocaba con Frank Zappa"
					imgSrc="https://www.futuro.cl/wp-content/uploads/2021/02/15ecb31b0b97e2668d70fc42db3a2280.jpg"
					botonDes="Web Vai"
					web="https://es.wikipedia.org/wiki/Steve_Vai"
				/>
				<Card
					title="Al Di Meola"
					description="Al Di Meola es un famoso guitarrista del mundo del jazz fusión que tocaba con Chick Corea y Paco de Lucia"
					imgSrc="https://valenciacity.es/wp-content/uploads/Al-Di-Meola.jpg"
					botonDes="Web DiMeola"
					web="https://es.wikipedia.org/wiki/Al_Di_Meola"
				/>
			</div>
		</div>
	);
}
