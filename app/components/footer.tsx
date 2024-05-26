const Footer = () => {
	return (
		<section className="z-0 bg-stone-100 text-stone-900">
			{/* Desktop Footer */}
			<div className="hidden p-4 md:grid md:grid-cols-3">
				<div className="flex justify-between">
					<div className="m-auto flex h-full flex-col justify-between">
						<p className="text-lg font-medium">
							76, Triq Is-Suq, Floriana, FRN1080, Malta.
						</p>
						<p className="text-lg font-medium">info@box-cs.com</p>
					</div>
				</div>
				<div className="flex ">
					<p className="mx-auto content-end">Copyright © 2024 box Concept Studio Ltd.</p>
				</div>
				<div className="flex flex-col justify-between">
					<div className="m-auto flex h-full flex-col justify-between">
						<p className="text-lg font-medium">
							00356 9982 0957 | 00356 9946 6123
						</p>
						<p className="text-lg font-medium"> facebook | instagram</p>
					</div>
				</div>
			</div>
			{/* Mobile Footer */}
			<div className="flex flex-col justify-between gap-2 p-6 md:hidden">
				<div className="">
					<div className="m-auto flex h-full flex-col justify-between">
						<p className="text-xs font-medium">
							76, Triq Is-Suq, Floriana, FRN1080, Malta
						</p>
						<p className="text-xs font-medium">info@box-cs.com</p>
					</div>
				</div>
				<div className="">
					<div className="m-auto flex h-full flex-col justify-between">
						<p className="text-xs font-medium">
							00356 9982 0957 | 00356 9946 6123
						</p>
						<p className="text-xs font-medium"> facebook | instagram</p>
					</div>
				</div>
				<div className="flex pt-2">
					<p className="m-auto text-xs">
						Copyright © 2024 Box Concept Studio Ltd.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
