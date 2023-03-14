import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

const Menu = () => {
	return (
		<div className="grid min-h-screen">
			<Navbar />
			<div>
				<h1 className="uppercase lg:text-5xl md:text-4xl sm:text-2xl text-lg font-heading text-center py-8 sm:py-32">
					menu
				</h1>

				<div className="my-14 pb-10 lg:w-1/2 md:w-2/3 w-3/4 mx-auto border-b border-b-black">
					<h1 className="lg:text-4xl sm:text-3xl text-2xl  mb-2 font-heading">
						Starters
					</h1>
					<div className="flex justify-between items-center gap-2 my-4">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">Edamame</p>
							<p className="sm:text-base text-xs">Plain or salted</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">4.0</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">Shiitake Gyoza</p>
							<p className="sm:text-base text-xs">
								Sweet shiitake mushroom dumplings
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">4.0</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">
								Wasabi Takoyaki{" "}
							</p>
							<p className="sm:text-base text-xs">
								Spicy, batter-fried octopus
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">7.0</p>
						</div>
					</div>
				</div>
				<div className="my-10 pb-10 lg:w-1/2 md:w-2/3 w-3/4 mx-auto border-b border-b-black">
					<h1 className="lg:text-4xl sm:text-3xl text-2xl  mb-2 pt-6 font-heading">
						Salads
					</h1>
					<div className="flex justify-between items-center gap-2 my-4">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">Seaweed Salad </p>
							<p className="sm:text-base text-xs">
								Mixed seaweed, edamame beans and shredded carrot with a miso
								dressing
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">7.9</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">Green Salad </p>
							<p className="sm:text-base text-xs">
								Baby spinach, lollo rosso and steamed vegetables with carrot and
								sesame dressing
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">7.9</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">Tuna Salad </p>
							<p className="sm:text-base text-xs">
								Pickled seasonal vegetables, tuna steak and mixed leaves with a
								spicy miso dressing{" "}
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">7.9</p>
						</div>
					</div>
				</div>
				<div className="my-10 pb-10 lg:w-1/2 md:w-2/3 w-3/4 mx-auto mb-20">
					<h1 className="lg:text-4xl sm:text-3xl text-2xl  mb-2 pt-6 font-heading">
						Sushi Sets
					</h1>
					<div className="flex justify-between items-center gap-2 my-4">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">
								Vegetarian Maki Set{" "}
							</p>
							<p className="sm:text-base text-xs">
								Cucumber, radish, sweet Japanese omelet, and fried tofu maki
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">7.9</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">
								Mixed Fish Set{" "}
							</p>
							<p className="sm:text-base text-xs">
								A local and seasonal fish selection of futomaki and inside-out
								rolls{" "}
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">9.9</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">
								Chef’s Sashimi Set{" "}
							</p>
							<p className="sm:text-base text-xs">
								Different cuts of tuna and salmon sashimi
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">7.0</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">
								Chef’s Favorites Set{" "}
							</p>
							<p className="sm:text-base text-xs">
								Sweet Japanese omelet nigiri, tuna sashimi, radish maki rolls,
								and flame-grilled salmon futomaki{" "}
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">14.0</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 my-4 mt-8">
						<div>
							<p className="sm:text-2xl text-sm sm:my-4 my-1">Green Salad </p>
							<p className="sm:text-base text-xs">
								Baby spinach, green leaf and steamed veg with carrot and sesame
								dressing
							</p>
						</div>
						<div>
							<p className="sm:text-2xl text-sm">20.0</p>
						</div>
					</div>
				</div>
			</div>
			<Footer className="mt-auto" />
		</div>
	);
};

export default Menu;
