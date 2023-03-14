import React from "react";
import Navbar from "../../Navbar";
import Footer from "./../../Footer";

const About = () => {
	return (
		<div className="grid min-h-screen">
			<Navbar />
			<div className="w-full ">
				<div className="w-full">
					<img
						className="w-full"
						src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/loki04208/Rectangle-AVLO9OG1y6u4MNgB.png"
						alt="/"
					/>
				</div>
				<div className="w-full">
					<h1 className="text-center text-lg sm:text-3xl md:text-5xl w-4/5 mx-auto py-20 sm:py-32 font-heading">
						Washoku, or the traditional Japanese cuisine, is centered around the
						idea of seasonality.
					</h1>
					<div className="w-2/3 mx-auto grid lg:grid-cols-2 mb-10 sm:mb-32 gap-4 mt-10">
						<div className="">
							<img
								className="w-full"
								src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=624,fit=crop/loki04208/chefimage-AoPalaEWjvU0oVn9.png"
								alt="/"
							/>
						</div>
						<div className="flex flex-col items-start justify-center lg:pl-28 ">
							<h1 className="uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl font-heading">
								our chef
							</h1>
							<p className="py-8 sm:text-base text-sms">
								Akihito Yakimoto’s culinary career started at age 6, as he
								helped out in the family inn’s restaurant. Over the years, he
								traveled across the Chiba prefecture to hone his skills as a
								sushi chef. Eventually, he took over a downtown sushi restaurant
								in Tokyo, which quickly rose to fame and was featured in all of
								the Japanese culinary magazines.
							</p>
							<p className="py-6 sm:text-base text-sms">
								Now the founder of Loki, Chef Yakimoto’s mission is to introduce
								Londoners to a more traditional and seasonal take on Japanese
								cuisine.{" "}
							</p>
							<img
								src="https://assets.zyrosite.com/loki04208/parasiukas-YZ9D5D7lLoT7B5ka.svg"
								alt="/"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer className="mt-auto" />
		</div>
	);
};

export default About;
