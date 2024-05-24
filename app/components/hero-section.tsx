const HeroSection = () => {
	return (
		<section className="">
			<div className="clip-path-0 relative flex h-screen max-h-screen overflow-hidden">
				<div className="fixed left-0 top-0 z-0 h-full w-full">
					<div className="slide-in-1400 animation-delay-500 relative flex h-[45vh] justify-center bg-stone-400 opacity-0">
						<div className="text-10xl absolute bottom-0 flex flex-row gap-10 text-stone-200">
							<div className="title-slide-in-top-750 animation-delay-1600 opacity-0">
								box
							</div>{" "}
							<div className="title-slide-in-top-750 animation-delay-1700 opacity-0">
								concept
							</div>{" "}
							<div className="title-slide-in-top-750 animation-delay-1800 opacity-0">
								studio
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
