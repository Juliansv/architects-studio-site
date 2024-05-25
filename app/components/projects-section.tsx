import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
	return (
		<section
			id="projects-section"
			className="relative z-0 bg-[#231f20] text-white"
		>
			<div className="clip-path-0 relative h-screen max-h-screen overflow-hidden">
				<Link href="#" className="fixed left-0 top-0 z-0 h-full w-full">
					<div className="opacity-80">
						<Image
							src="/images/odicy-hotel.webp"
							alt="odicy-lido"
							width={1600}
							height={1600}
							className="h-screen max-h-screen w-full cursor-default object-cover img-fade-in-3000"
						/>
					</div>
					<div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
						<div className="z-40 m-0 flex flex-col gap-2 pb-0 pt-0 text-center">
							<h1 className="text-5xl font-bold ">Odicy Hotel</h1>
							<p className="px-1 text-4xl font-semibold leading-tight">
								A Landmark Identity Reimagined <br /> for Modern Comfort
							</p>
							<p>QAWRA, MALTA</p>
						</div>
					</div>
				</Link>
			</div>
			<div className="clip-path-0 relative h-screen overflow-hidden">
				<Link href="#" className="fixed left-0 top-0 z-0 h-full w-full">
					<div className="opacity-80">
						<Image
							src="/images/salvo-grima.webp"
							alt="odicy-lido"
							width={1600}
							height={1600}
							className="h-screen w-full object-cover img-fade-in-3000"
						/>
					</div>
					<div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
						<div className="z-40 m-0 flex flex-col gap-2 pb-0 pt-0 text-center">
							<h1 className="text-5xl font-bold ">Salvo Grima Group </h1>
							<p className="px-1 text-4xl font-semibold leading-tight">
								Offices Merging Innovation <br /> with Well-Being
							</p>
							<p>MARSA, MALTA</p>
						</div>
					</div>
				</Link>
			</div>
			<div className="clip-path-0 relative h-screen overflow-hidden">
				<Link href="#" className="fixed left-0 top-0 z-0 h-full w-full">
					<div className="opacity-80">
						<Image
							src="/images/odicy-lido.webp"
							alt="odicy-lido"
							width={1600}
							height={1600}
							className="h-screen w-full object-cover img-fade-in-2000"
						/>
					</div>
					<div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
						<div className="z-40 m-0 flex flex-col gap-2 pb-0 pt-0 text-center">
							<h1 className="text-5xl font-bold ">Odicy Lido</h1>
							<p className="px-1 text-4xl font-semibold leading-tight ">
								Revitalizing Qawra&apos;s Coastal Charm
							</p>
							<p>QAWRA, MALTA</p>
						</div>
					</div>
				</Link>
			</div>
			<div className="clip-path-0 relative h-screen overflow-hidden">
				<Link href="#" className="fixed left-0 top-0 z-0 h-full w-full">
					<div className="opacity-80">
						<Image
							src="/images/melieha-villa.webp"
							alt="odicy-lido"
							width={1600}
							height={1600}
							className="h-screen w-full object-cover img-fade-in-3000"
						/>
					</div>
					<div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
						<div className="z-40 m-0 flex flex-col gap-2 pb-0 pt-0 text-center">
							<h1 className="text-5xl font-bold ">Mellieha Villa</h1>
							<p>MELLIEHA, MALTA</p>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default ProjectsSection;
