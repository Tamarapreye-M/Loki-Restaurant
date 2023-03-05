import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);
	const handleClose = () => setNav(!nav);

	const allStyle =
		"absolute md:hidden overflow-hidden transition-all duration-300 delay-75 w-full font-bold text-lg text-center bg-nav-white flex flex-col gap-4 py-8";

	return (
		<div className="w-full h-[80px] bg-white sticky top-0 right-0 z-10">
			{/* desktop meny */}
			<div className="flex justify-between items-center px-4 md:px-0 pt-6 md:max-w-[80%] w-3/4 mx-auto">
				<div className=" w-16">
					<img
						className="w-full"
						src="https://assets.zyrosite.com/loki04208/Union-Aq2x89LJE2cPD57W.svg"
						alt="/"
					/>
				</div>
				<ul className="md:flex items-center font-bold text-lg gap-12 hidden">
					<li className="">About</li>
					<li className="">Menu</li>
					<li className="">Contact</li>
				</ul>

				{/* mobile menu bars */}
				<div className="w-8 md:hidden">
					{!nav ? (
						<Bars3Icon
							onClick={handleNav}
							className="transition-all delay-75"
						/>
					) : (
						<XMarkIcon
							onClick={handleNav}
							className="transition-all delay-75"
						/>
					)}
				</div>
			</div>
			{/* mobile menu */}
			<ul
				className={
					!nav ? allStyle + " top-[-1000px]" : allStyle + " origin-top top-14 "
				}
			>
				<li>About</li>
				<li>Menu</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
