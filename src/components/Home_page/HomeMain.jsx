import React from "react";

const Main = () => {
	return (
		<main className="w-full ">
			<section className="bg-white max-w-[1240px] md:w-3/4 w-3/5 mx-auto">
				<div className="w-full mx-auto justify-items-center flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-16 sm:py-32">
					<div className="flex flex-col justify-center items-start md:col-span-2 lg:col-span-1">
						<h1 className="uppercase md:text-5xl text-3xl font-heading">
							menu
						</h1>
						<p className="lg:text-base text-sm md:text-sm py-6 md:w-4/5 ">
							Our menu is built around the changing seasons, and we only use the
							finest and locally-sourced ingredients in our dishes.
						</p>
						<button className="border-black">read more</button>
					</div>
					<div>
						<img
							className="w-full"
							src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1235,fit=crop/loki04208/Rectangle-dJoxpnWvorUkGkK7.png"
							alt="/"
						/>
					</div>
					<div>
						<img
							className="w-full"
							src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1223,fit=crop/loki04208/Rectangle-YD0Z7xo2Z9irXbx7.png"
							alt="/"
						/>
					</div>
				</div>
			</section>
			<section className=" bg-dark-green text-white my-4 sm:my-12 py-14">
				<div className="max-w-[1240px] md:w-3/4 w-3/5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-28">
					<div className=" lg:col-span-2">
						<img
							className="w-full h-full"
							src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=733,fit=crop/loki04208/Rectangle-Yle7X3Gy94I7gkGr.png"
							alt="/"
						/>
					</div>
					<div className="flex flex-col justify-center items-start">
						<h1 className="uppercase md:text-4xl text-3xl xl:text-5xl font-heading">
							about
						</h1>
						<p className="lg:text-base text-sm py-6 w-full">
							Loki’s mission is to bring Japanese soul food to your doorstep and
							transport you to downtown Tokyo. Chef Yakimoto, the founder and
							owner of Loki, trained under many teachers in the Chiba prefecture
							before moving to the UK.
						</p>
						<button className="text-white border-white hover:bg-white hover:text-black">
							read more
						</button>
					</div>
				</div>
			</section>
			<section className="bg-white max-w-[1240px] md:w-3/4 w-3/5 mx-auto">
				<div className="w-full mx-auto justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-16 sm:py-32">
					<div>
						<img
							className="w-full"
							src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1223,fit=crop/loki04208/Rectangle-Yyveazr2ZJF3kDRN.png"
							alt="/"
						/>
					</div>
					<div>
						<img
							className="w-full"
							src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1223,fit=crop/loki04208/Rectangle-Aq2x8O9bZBHWbxJX.png"
							alt="/"
						/>
					</div>
					<div className="lg:pl-16 flex flex-col justify-center items-start md:col-span-2 lg:col-span-1">
						<h1 className="uppercase md:text-4xl xl:text-5xl text-3xl font-heading">
							contact
						</h1>
						<p className="lg:text-base text-sm md:text-sm py-6 md:w-4/5 lg:w-full">
							We take table reservations and also cater at events. Get in touch
							with our team for more details. For dietary restrictions, reach
							out to our front of house team.
						</p>
						<button className="border-black">contact us</button>
					</div>
				</div>
			</section>
			<div className="w-full relative">
				<div className="w-full h-full">
					<img
						className="w-full h-full"
						src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/loki04208/Rectangle-mxByGJk9lyU6OgNe.png"
						alt="/"
					/>
				</div>
				<div className=" text-white text-center h-full absolute top-[50%] left-[50%] -translate-x-2/4 sm:-translate-y-[18%] -translate-y-[29%] ">
					<h1 className="sm:text-xl text-sm md:text-4xl lg:text-5xl font-heading">
						Loki: where London meets the seasonal Japanese cuisine.
					</h1>
				</div>
			</div>
		</main>
	);
};

export default Main;
