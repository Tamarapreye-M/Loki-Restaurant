import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);
	const handleClose = () => setNav(!nav);

	const allStyle =
		"absolute md:hidden overflow-hidden transition-all duration-300 delay-75 w-full font-bold text-lg text-center bg-nav-white inline-flex flex-col gap-4 py-8";

	return (
		<div className="w-full h-[80px] bg-white sticky top-0 right-0 z-10">
			{/* desktop meny */}
			<div className="flex justify-between items-center px-2 sm:px-6 md:px-0 pt-6 md:max-w-[80%] md:w-3/4 mx-auto">
				<div className="w-16 cursor-pointer">
					<NavLink to="/">
						<img
							className="w-full"
							src="https://assets.zyrosite.com/loki04208/Union-Aq2x89LJE2cPD57W.svg"
							alt="/"
						/>
					</NavLink>
				</div>
				<ul className="md:flex items-center font-bold text-lg gap-12 hidden">
					<NavLink
						to="/about"
						className={({ isActive }) => isActive && "border-b border-b-black"}
					>
						<li className="hover:border-b-black hover:border-b">About</li>
					</NavLink>

					<NavLink
						to="/menu"
						className={({ isActive }) => isActive && "border-b border-b-black"}
					>
						<li className="hover:border-b-black hover:border-b cursor-pointer">
							Menu
						</li>
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => isActive && "border-b border-b-black"}
					>
						<li className="hover:border-b-black hover:border-b cursor-pointer">
							Contact
						</li>
					</NavLink>
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
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive && "border-b border-b-black w-fit mx-auto"
					}
				>
					<li className="hover:border-b-black hover:border-b inline-flex cursor-pointer">
						About
					</li>
				</NavLink>
				<NavLink
					to="/menu"
					className={({ isActive }) =>
						isActive && "border-b border-b-black w-fit mx-auto"
					}
				>
					<li className="hover:border-b-black hover:border-b inline-flex cursor-pointer">
						Menu
					</li>
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive && "border-b border-b-black w-fit mx-auto"
					}
				>
					<li className="hover:border-b-black hover:border-b inline-flex cursor-pointer">
						Contact
					</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navbar;
