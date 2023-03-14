import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Hero from "./Hero";
import Main from "./HomeMain";

const Home = () => {
	return (
		<div className="grid min-h-screen">
			<Navbar />
			<Hero />
			<Main />
			<Footer className="mt-auto" />
		</div>
	);
};

export default Home;
