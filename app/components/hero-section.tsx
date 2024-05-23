const HeroSection = () => {
	return (
		<section className="">
			<div className="clip-path-0 relative flex h-screen max-h-screen overflow-hidden">
				<div className="fixed left-0 top-0 z-0 h-full w-full">
					<div className="slide-in-1000 animation-delay-500 relative flex h-[45vh] justify-center bg-stone-400 opacity-0">
						<h1 className="fade-in-1000 animation-delay-1500 text-10xl absolute bottom-0 text-stone-200 opacity-0">
							<span className="slide-in-1000 animation-delay-1600 opacity-0">box</span>{" "}
							<span className="slide-in-1000 animation-delay-1700 opacity-0">concept</span>{" "}
							<span className="slide-in-1000 animation-delay-1800 opacity-0">studio</span>
						</h1>
					</div>
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
