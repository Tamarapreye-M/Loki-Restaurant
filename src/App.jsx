import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home_page/Home";
import About from "./components/Pages/About_Page/About";
import Menu from "./components/Pages/Menu_Page/Menu";
import Contact from "./components/Pages/Contact_Page/Contact";

const App = () => {
	return (
		<div className="">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
