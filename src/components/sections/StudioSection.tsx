"use client";

export default function StudioSection() {
	const services = [
		{
			number: "01",
			title: "Web Development",
			description:
				"Building websites of any complexity — from landing pages to large-scale web applications. We use Next.js, React, and cutting-edge technologies.",
		},
		{
			number: "02",
			title: "No-Code Solutions",
			description:
				"Rapid project launches on no-code platforms. Perfect for MVPs and startups looking to hit the market as fast as possible.",
		},
		{
			number: "03",
			title: "Web Design",
			description:
				"UI/UX design that stands out. We create visually powerful interfaces focused on user experience and conversion.",
		},
	];

	return (
		<section id="studio" className="py-16 px-6">

			<div className="flex items-center gap-3 mb-12">
				<div className="w-3 h-3 bg-primary rounded-full" />
				<span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">
					About Studio
				</span>
			</div>

			<div className="mb-16">
				<h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
					We build{" "}
					<span className="text-primary italic">digital</span>
					<br />
					experiences.
				</h2>
				<div className="max-w-2xl">
					<p className="text-lg font-medium leading-relaxed mb-6 border-l-4 border-primary pl-6">
						NextPixel is a young studio building next-generation websites.
						We combine cutting-edge technologies with minimalist design,
						turning every project into a digital work of art.
					</p>
					<p className="text-base text-zinc-500 leading-relaxed">
						From complex web applications built with React and Next.js to rapid
						solutions on no-code platforms — we find the optimal approach for every
						client. Our goal is not just to create a website, but to build a digital
						product that drives your business forward.
					</p>
				</div>
			</div>

			<div className="border-t-[3px] border-black">
				{services.map((service, i) => (
					<div
						key={service.number}
						className={`py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 ${i < services.length - 1 ? "border-b-[3px] border-black" : ""
							}`}
					>
						<div className="flex items-center gap-4 md:w-48 shrink-0">
							<span className="text-xs font-bold text-zinc-400">
								{service.number}
							</span>
							<h3 className="text-2xl font-bold uppercase tracking-tight">
								{service.title}
							</h3>
						</div>
						<p className="text-base text-zinc-500 leading-relaxed md:max-w-md">
							{service.description}
						</p>
					</div>
				))}
			</div>

			<div className="grid grid-cols-3 mt-12 brutal-border-all">
				<div className="p-6 text-center border-r-[3px] border-black">
					<span className="text-4xl md:text-5xl font-black block">3+</span>
					<span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
						Partners
					</span>
				</div>
				<div className="p-6 text-center border-r-[3px] border-black">
					<span className="text-4xl md:text-5xl font-black block">100%</span>
					<span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
						Satisfaction
					</span>
				</div>
				<div className="p-6 text-center">
					<span className="text-4xl md:text-5xl font-black text-primary block">
						24/7
					</span>
					<span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
						Support
					</span>
				</div>
			</div>
		</section>
	);
}
