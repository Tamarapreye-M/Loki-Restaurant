import React from "react";

const Hero = () => {
	return (
		// <div className="w-full h-[10vh] min-[490px]:h-[40vh] max-[640px]:h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-screen">
		// 	<div className=" text-black w-full max-[387px]:h-[60%] h-full  bg-[url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/loki04208/heroimage-mp8BO5GrzVHearnw.png')] bg-contain sm:bg-[length:100%_700px] lg:bg-cover md:bg-top lg:bg-center bg-no-repeat">
		// 		<div className="uppercase flex flex-col justify-center items-center h-full">
		// 			<h1 className="sm:text-3xl text-2xl md:text-7xl font-heading">
		// 				loki
		// 			</h1>
		// 			<p className=" sm:text-lg text-sm md:text-xl">japanese cuisine</p>
		// 		</div>
		// 	</div>
		// </div>

		<div className="w-full relative max-h-screen">
			<div className="w-full h-full">
				<img
					className="w-full h-full"
					src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/loki04208/heroimage-mp8BO5GrzVHearnw.png"
					alt="/"
				/>
			</div>
			<div className="uppercase text-center h-full absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-[18%] ">
				<h1 className="sm:text-2xl text-xl md:text-7xl font-heading">loki</h1>
				<p className=" sm:text-sm text-sm md:text-xl">japanese cuisine</p>
			</div>
		</div>
	);
};

export default Hero;
