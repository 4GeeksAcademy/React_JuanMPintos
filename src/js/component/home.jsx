import React from "react";
import Navbar from "./navbar";
import "../../styles/index.css";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
