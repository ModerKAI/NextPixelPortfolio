import TransitionLink from "@/components/ui/TransitionLink";
import Navbar from "@/components/layout/Navbar";
import DiagonalSlice from "@/components/animations/DiagonalSlice";
import ManifestoAnimation from "@/components/animations/ManifestoAnimation";

export const metadata = {
	title: "NextPixel | Studio",
	description: "We architect digital excellence. NextPixel is a boutique digital architecture studio.",
};

export default function StudioPage() {
	return (
		<>
			<Navbar variant="studio" />
			<main className="relative">
				<section className="px-6 pt-12 pb-8">
					<h1 className="text-[clamp(5rem,18vw,9rem)] leading-[0.85] tracking-tighter font-black uppercase font-condensed">
						We Architect
						<br />
						Digital
						<br />
						Excellence
					</h1>
				</section>

				<section className="px-6 mb-16">
					<DiagonalSlice
						imageSrc="/studio.jpg"
						alt="Architectural Space"
					/>
				</section>

				<ManifestoAnimation />

				<section className="p-6 border-b-4 border-black">
					<p className="text-xl font-medium leading-relaxed">
						NextPixel is a boutique digital architecture studio. We dismantle
						mediocrity to rebuild high-performance digital ecosystems that
						command attention and drive conversion.
					</p>
				</section>

				<section className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black border-b-4 border-black">
					<div className="p-6 md:p-8 flex flex-col justify-center bg-white">
						<span className="text-2xl md:text-3xl font-condensed font-black uppercase">Web Design</span>
						<span className="text-[10px] font-black uppercase tracking-widest mt-2 text-gray-500">
							Service / 01
						</span>
					</div>
					<div className="p-6 md:p-8 flex flex-col justify-center bg-white">
						<span className="text-2xl md:text-3xl font-condensed font-black uppercase">AI Automation</span>
						<span className="text-[10px] font-black uppercase tracking-widest mt-2 text-gray-500">
							Service / 02
						</span>
					</div>
					<div className="p-6 md:p-8 flex flex-col justify-center bg-white">
						<span className="text-2xl md:text-3xl font-condensed font-black uppercase">Web Dev</span>
						<span className="text-[10px] font-black uppercase tracking-widest mt-2 text-gray-500">
							Service / 03
						</span>
					</div>
				</section>
			</main>

			<footer className="p-12 pb-32 bg-background-light">
				<div className="flex flex-col gap-8">
					<h2 className="text-4xl font-black uppercase leading-none font-condensed italic underline decoration-primary decoration-4">
						Studio Core.
					</h2>
					<div className="flex flex-col gap-4">
						<p className="text-sm font-bold max-w-50 leading-snug uppercase">
							Join the elite circle of digital architects.
						</p>
						<div className="flex gap-4">
							<a className="underline font-bold text-xs uppercase" href="https://www.instagram.com/nextpixel_web" target="_blank" rel="noopener noreferrer">
								Instagram
							</a>

						</div>
					</div>
				</div>
			</footer>

			<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] flex justify-between items-center pointer-events-none">
				<TransitionLink
					href="/inquiry"
					className="bg-black text-white border-4 border-black px-6 py-3 pointer-events-auto shadow-[4px_4px_0px_#135bec] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
				>
					<span className="text-xs font-black tracking-widest uppercase">
						Hire Studio
					</span>
				</TransitionLink>

			</div>
		</>
	);
}
