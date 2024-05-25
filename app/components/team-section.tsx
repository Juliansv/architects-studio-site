import Image from "next/image";

const TeamSection = () => {
	return (
		<section id="team-section" className="relative z-0 text-white">
			<div className="left-0 top-0 z-0 flex h-20  w-full items-center justify-center bg-[#d3cecb]"></div>
			<div className=" bg-stone-300 px-5 2xl:px-72">
				<div id="co-founders" className="grid grid-cols-1 md:grid-cols-2">
					<div className=" m-auto flex flex-col justify-between gap-2 p-8 md:p-24">
						<Image
							src="/images/team/JingYao-Xu.webp"
							alt="JingYao Xu"
							width={1600}
							height={1600}
							className="cursor-pointer rounded-full border-2 border-stone-400 grayscale transition duration-500 ease-in-out hover:grayscale-0"
						/>
						<div>
							<p className="pt-2 text-center text-2xl font-medium text-stone-900">
								JingYao Xu
							</p>
							<p className="pt-2 text-center text-xl text-stone-900">
								co-founder | architect
							</p>
							<p className="text-center text-lg font-light text-stone-900">
								yao@box-cs.com
							</p>
						</div>
					</div>
					<div className="m-auto flex flex-col justify-between gap-2 p-8 md:p-24">
						<Image
							src="/images/team/Peter-Brincat.webp"
							alt="Peter Brincat"
							width={1600}
							height={1600}
							className="cursor-pointer rounded-full border-2 border-stone-400 grayscale transition duration-500 ease-in-out hover:grayscale-0"
						/>
						<div>
							<p className="pt-2 text-center text-2xl font-medium text-stone-900">
								Peter Brincat
							</p>
							<p className="pt-2 text-center text-xl text-stone-900">
								co-founder | architect
							</p>
							<p className="text-center text-lg font-light text-stone-900">
								peter@box-cs.com
							</p>
						</div>
					</div>
					<div className="m-auto flex flex-col justify-between gap-2 p-8 md:p-24">
						<Image
							src="/images/team/Isaac-Buttigieg.webp"
							alt="Issac Buttigieg"
							width={1600}
							height={1600}
							className="cursor-pointer rounded-full border-2 border-stone-400 grayscale transition duration-500 ease-in-out hover:grayscale-0"
						/>
						<div>
							<p className="pt-2 text-center text-2xl font-medium text-stone-900">
								Isaac Buttigieg
							</p>
							<p className="pt-2 text-center text-xl text-stone-900">
								architect
							</p>
							<p className="text-center text-lg font-light text-stone-900">
								isaac@box-cs.com
							</p>
						</div>
					</div>
					<div className="m-auto flex flex-col justify-between gap-2 p-8 md:p-24">
						<Image
							src="/images/team/John-Bajada.webp"
							alt="John Bajada"
							width={1600}
							height={1600}
							className="cursor-pointer rounded-full border-2 border-stone-400 grayscale transition duration-500 ease-in-out hover:grayscale-0"
						/>
						<div>
							<p className="pt-2 text-center text-2xl font-medium text-stone-900">
								John Bajada
							</p>
							<p className="pt-2 text-center text-xl text-stone-900">
								architect
							</p>
							<p className="text-center text-lg font-light text-stone-900">
								john@box-cs.com
							</p>
						</div>
					</div>
					<div className="m-auto flex flex-col justify-between gap-2 p-8 md:p-24">
						<Image
							src="/images/team/Miguel-Petrovic.webp"
							alt="Miguel Petrovic"
							width={1600}
							height={1600}
							className="cursor-pointer rounded-full border-2 border-stone-400 grayscale transition duration-500 ease-in-out hover:grayscale-0"
						/>
						<div>
							<p className="pt-2 text-center text-2xl font-medium text-stone-900">
								Miguel Petrovic
							</p>
							<p className="pt-2 text-center text-xl text-stone-900">
								architect
							</p>
							<p className="text-center text-lg font-light text-stone-900">
								miguel@box-cs.com
							</p>
						</div>
					</div>
					<div className="m-auto flex flex-col justify-between gap-2 p-8 md:p-24">
						<Image
							src="/images/team/Judith-Hunter.webp"
							alt="Judith Hunter"
							width={1600}
							height={1600}
							className="cursor-pointer rounded-full border-2 border-stone-400 grayscale transition duration-500 ease-in-out hover:grayscale-0"
						/>
						<div>
							<p className="pt-2 text-center text-2xl font-medium text-stone-900">
								Judith Hunter
							</p>
							<p className="pt-2 text-center text-xl text-stone-900">
								architect
							</p>
							<p className="text-center text-lg font-light text-stone-900">
								judy@box-cs.com
							</p>
						</div>
					</div>
				</div>
				<div id="architects"></div>
			</div>
		</section>
	);
};

export default TeamSection;
