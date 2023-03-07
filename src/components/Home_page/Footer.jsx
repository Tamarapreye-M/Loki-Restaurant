import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className=" bg-dark-green w-full py-12 sm:py-28 text-white">
			<div className="max-w-[1240px] w-2/3 mx-auto">
				<div className="grid lg:grid-cols-4 md:gap-8">
					<div className=" sm:w-24 w-20">
						<img
							className="w-full"
							src="https://assets.zyrosite.com/loki04208/Group-dOqjwQKR5qS3xkJk.svg"
							alt="/"
						/>
					</div>
					<div className="grid md:grid-rows-2 grid-rows-1 gap-10 lg:col-span-2 md:col-span-1 text-sm sm:text-base font-medium">
						<div className="grid md:grid-cols-2 grid-cols-1 gap-8">
							<p>
								120 Towergate, Southwark <br /> SE1 4HQ, LONDON
							</p>
							<p>
								Mon - Thu, 11am-9pm <br /> Fri - Sun, 11am-9pm
							</p>
						</div>
						<div className="grid md:grid-cols-2 grid-cols-1 gap-8">
							<p>+447791560387</p>
							<p>info@loki.com</p>
						</div>
					</div>
					<div className="flex lg:justify-center justify-start lg:mt-0 mt-4 items-start gap-8 text-2xl">
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
