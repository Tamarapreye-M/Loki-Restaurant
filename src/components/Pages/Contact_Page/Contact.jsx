import React from "react";
import Navbar from "../../Navbar";
import Footer from "./../../Footer";
import Map from "./Map";

const Contact = () => {
	const location = {
		address: "1600 Amphitheatre Parkway, Mountain View, california.",
		lat: 37.42216,
		lng: -122.08427,
	};
	return (
		<div className="grid min-h-screen">
			<Navbar />
			<div className="w-2/3 mx-auto grid lg:grid-cols-2 py-32">
				{/* <Map location={location} zoomLevel={17} /> */}
				<div>
					<h1 className="uppercase font-heading lg:text-5xl md:text-4xl sm:text-3xl textxl">
						Bookings
					</h1>
					<p className="md:text-lg py-8 lg:w-2/3">
						For reservations and table bookings, please fill out the form below:{" "}
					</p>
					<p className="md:text-lg py-4">info@loki.com</p>
					<p className="md:text-lg py-4">+447791560387</p>
				</div>
				<form className="flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<label className="text-lg">First Name*</label>
						<input
							className="pl-3 bg-gray-300 placeholder:text-gray-700 py-4 text-sm focus:outline-none"
							type="text"
							placeholder="Your first name"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-lg">Last Name*</label>
						<input
							className="pl-3 bg-gray-300 placeholder:text-gray-700 py-4 text-sm focus:outline-none"
							type="text"
							placeholder="Your last name"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-lg">Email*</label>
						<input
							className="pl-3 bg-gray-300 placeholder:text-gray-700 py-4 text-sm focus:outline-none"
							type="email"
							placeholder="Your email"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-lg">Message*</label>
						<textarea
							className="pl-3 pt-4 bg-gray-300 placeholder:text-gray-700 text-sm focus:outline-none"
							name="message"
							placeholder="Enter your message"
							cols="20"
							rows="6"
						></textarea>
					</div>
					<button type="submit" className=" w-fit">
						submit
					</button>
				</form>
			</div>
			<Footer className="mt-auto" />
		</div>
	);
};

export default Contact;
