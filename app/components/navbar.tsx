const Navbar = () => {
	return (
		<section className="slide-in-1000 animation-delay-2000 fixed z-10 w-full bg-transparent opacity-0 mix-blend-difference backdrop-blur-xl">
			{/* desktop */}
			<div className="flex  min-h-20 w-full justify-between text-stone-200 sm:px-10 md:px-24 xl:px-40 2xl:px-72">
				<div className="content-center text-5xl font-bold fade-in-500 animation-delay-2000 opacity-0">
					<a href="#top">bcs</a>
				</div>
				<nav className="w-1/3 content-center">
					<ul className="flex justify-between text-lg">
						<li className="hover:scale-105">
							<a href="#projects-section">Projects</a>
						</li>
						<li className="hover:scale-105">
							<a href="#team-section">Team</a>
						</li>
						<li className="hover:scale-105">
							<a href="#recruitment-section">Recruitment</a>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};

export default Navbar;
