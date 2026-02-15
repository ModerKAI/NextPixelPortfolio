import TransitionLink from "@/components/ui/TransitionLink";

export default function Footer() {
	return (
		<footer className="p-12 pb-32 bg-[#F2F2F2] border-t-[3px] border-black">
			<div className="flex flex-col gap-8">
				<h2 className="text-4xl font-black uppercase leading-none font-condensed italic">
					Next Generation Digital.
				</h2>
				<div className="flex flex-col gap-4">
					<p className="text-sm font-bold max-w-[200px]">
						WE BUILD WHAT OTHERS FEAR TO IMAGINE.
					</p>
					<div className="flex gap-4">
						<TransitionLink
							href="https://www.instagram.com/nextpixel_web"
							target="_blank"
							rel="noopener noreferrer"
							className="underline font-bold text-xs uppercase"
						>
							Instagram
						</TransitionLink>
					</div>
				</div>
			</div>
		</footer>
	);
}
