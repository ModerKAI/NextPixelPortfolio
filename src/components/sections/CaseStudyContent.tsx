import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function CaseStudyContent() {
	const t = await getTranslations("caseStudy");

	return (
		<>
			<section className="mt-16 px-4">
				<h2 className="text-3xl font-bold uppercase tracking-tight mb-6 leading-none">
					{t("contentHeading")}{" "}
					<span className="text-primary">{t("contentHighlight")}</span> {t("contentSuffix")}
				</h2>
				<p className="text-lg font-medium leading-relaxed mb-10 border-l-4 border-primary pl-4">
					{t("contentDescription")}
				</p>
				<div className="brutal-border-all p-2 mb-16 relative aspect-video">
					<Image
						src="/nighthold2.jpg"
						alt="UI Detail shot"
						fill
						className="object-cover"
						quality={100}
						sizes="100vw"
					/>
				</div>
			</section>

			<section className="bg-brutal-black text-white py-16 px-4">
				<div className="mb-8">
					<span className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-1 mb-4 uppercase">
						{t("technicalLabel")}
					</span>
					<h3 className="text-4xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
						{t("technicalHeading")}
					</h3>
					<p className="text-zinc-400 font-normal leading-snug">
						{t("technicalDescription")}
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="aspect-square brutal-border-all border-zinc-700 overflow-hidden relative">
							<Image
								src="/nighthold04.jpg"
								alt="Performance"
								fill
								className="object-cover"
							/>
							<div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
								<span className="text-3xl font-bold block">60FPS</span>
								<span className="text-[10px] uppercase opacity-50 tracking-widest">
									{t("performance")}
								</span>
							</div>
						</div>
						<div className="aspect-square overflow-hidden relative">
							<Image
								src="/nighthold03.jpg"
								alt="Load Speed"
								fill
								className="object-cover"
							/>
							<div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
								<span className="text-3xl font-bold block">0.4s</span>
								<span className="text-[10px] uppercase opacity-50 tracking-widest">
									{t("loadSpeed")}
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 px-4 bg-background-light">
				<div className="brutal-border-all overflow-hidden relative group aspect-video">
					<Image
						src="/technik.jpg"
						alt="Marketing visualization"
						fill
						className="object-cover"
						quality={100}
						sizes="100vw"
					/>
					<div className="absolute bottom-4 left-4 bg-white text-black font-bold px-3 py-1 text-xs brutal-border-all">
						{t("systemArchitecture")}
					</div>
				</div>
			</section>


		</>
	);
}
