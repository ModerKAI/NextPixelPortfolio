import TransitionLink from "@/components/ui/TransitionLink";

export default function CTASection() {
	return (
		<section className="p-12 pb-24 flex flex-col items-center justify-center text-center space-y-10">
			<h2 className="text-5xl font-bold uppercase tracking-tighter leading-none">
				Ready to <br />
				Break Patterns?
			</h2>

			<TransitionLink
				href="/inquiry"
				className="group relative flex items-center gap-4 bg-background-light border-brutal p-2 rounded-full toggle-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-75"
			>
				<span className="pl-6 pr-2 font-bold uppercase tracking-widest text-sm">
					Project Inquiry
				</span>
				<div className="w-16 h-10 bg-black rounded-full p-1 flex items-center transition-colors group-hover:bg-primary">
					<div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
						<div className="w-2 h-2 bg-black rounded-full" />
					</div>
				</div>
			</TransitionLink>
		</section>
	);
}
