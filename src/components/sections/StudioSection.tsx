"use client";

import { useTranslations } from "next-intl";

export default function StudioSection() {
	const t = useTranslations("studio");

	const services = [
		{
			number: "01",
			title: t("service1Title"),
			description: t("service1Desc"),
		},
		{
			number: "02",
			title: t("service2Title"),
			description: t("service2Desc"),
		},
		{
			number: "03",
			title: t("service3Title"),
			description: t("service3Desc"),
		},
	];

	return (
		<section id="studio" className="py-16 px-6">

			<div className="flex items-center gap-3 mb-12">
				<div className="w-3 h-3 bg-primary rounded-full" />
				<span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">
					{t("aboutLabel")}
				</span>
			</div>

			<div className="mb-16">
				<h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
					{t("heading1")}{" "}
					<span className="text-primary italic">{t("headingHighlight")}</span>
					<br />
					{t("heading2")}
				</h2>
				<div className="max-w-2xl">
					<p className="text-lg font-medium leading-relaxed mb-6 border-l-4 border-primary pl-6">
						{t("description1")}
					</p>
					<p className="text-base text-zinc-500 leading-relaxed">
						{t("description2")}
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
						{t("partners")}
					</span>
				</div>
				<div className="p-6 text-center border-r-[3px] border-black">
					<span className="text-4xl md:text-5xl font-black block">100%</span>
					<span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
						{t("satisfaction")}
					</span>
				</div>
				<div className="p-6 text-center">
					<span className="text-4xl md:text-5xl font-black text-primary block">
						24/7
					</span>
					<span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
						{t("support")}
					</span>
				</div>
			</div>
		</section>
	);
}
