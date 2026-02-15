import TransitionLink from "@/components/ui/TransitionLink";

interface NextProjectProps {
	title: string;
	slug: string;
}

export default function NextProject({ title, slug }: NextProjectProps) {
	return (
		<section className="brutal-border-t bg-white pb-12">
			<TransitionLink href={`/works/${slug}`} className="block p-4 pt-10 group cursor-pointer">
				<div className="flex justify-between items-end mb-4">
					<span className="text-sm font-bold uppercase tracking-widest text-primary">
						Next Project
					</span>
					<span className="material-icons text-6xl transform group-hover:translate-x-2 transition-transform">
						arrow_forward
					</span>
				</div>
				<h4 className="text-[14vw] leading-[0.8] font-bold uppercase tracking-tighter">
					{title}
				</h4>
			</TransitionLink>
			<div className="mt-16 px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
				<span>&copy; 2026 NEXTPIXEL&trade;</span>
				<div className="flex gap-4">
					<span>TW</span>
					<span>IG</span>
					<span>LI</span>
				</div>
			</div>
		</section>
	);
}
