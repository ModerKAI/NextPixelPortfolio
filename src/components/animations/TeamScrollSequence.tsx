"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
	name: string;
	role: string;
	image: string;
	description: string;
}

interface TeamScrollSequenceProps {
	members: TeamMember[];
}

export default function TeamScrollSequence({ members }: TeamScrollSequenceProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			panelsRef.current.forEach((panel, i) => {
				if (!panel) return;

				const isEven = i % 2 === 0;
				const imageEl = panel.querySelector(".team-image");
				const infoEl = panel.querySelector(".team-info");

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: panel,
						start: "top center",
						end: "bottom center",
						toggleActions: "play none none reverse",
					},
				});

				tl.fromTo(
					imageEl,
					{
						xPercent: isEven ? 30 : -30,
						opacity: 0,
					},
					{
						xPercent: 0,
						opacity: 1,
						ease: "power2.out",
						duration: 1.2,
					}
				);

				tl.fromTo(
					infoEl,
					{
						y: 30,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						ease: "power2.out",
						duration: 0.8,
					},
					"-=0.8"
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, [members]);

	return (
		<div ref={containerRef} className="bg-black text-white">
			{members.map((member, i) => {
				const isEven = i % 2 === 0;

				return (
					<div
						key={member.name}
						ref={(el) => {
							panelsRef.current[i] = el;
						}}
						className="h-dvh w-full relative overflow-hidden flex items-center justify-center"
					>
						<div className="absolute inset-0 opacity-10 pointer-events-none">
							<div className={`absolute top-0 ${isEven ? "left-0" : "right-0"} w-1/2 h-full bg-linear-to-b from-gray-800 to-black`} />
						</div>

						<div className={`container mx-auto px-6 flex flex-col md:flex-row h-full items-center justify-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>

							<div className="team-info w-full md:w-1/2 flex flex-col justify-center items-start z-10 opacity-0">
								<div className="bg-zinc-900 border-l-4 border-primary p-8 md:p-12 shadow-[12px_12px_0px_#222] max-w-lg">
									<h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-4">
										{member.name}
									</h2>
									<p className="text-primary font-bold tracking-[0.3em] uppercase mb-8">
										{member.role}
									</p>
									<p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed uppercase">
									{member.description}
									</p>
								</div>
							</div>

							<div className="team-image w-full md:w-1/2 h-[50vh] md:h-[80vh] relative opacity-0">
								<div className="relative w-full h-full overflow-hidden">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={member.image}
										alt={member.name}
										className="absolute inset-0 w-full h-full object-cover"
										loading="eager"
									/>
								</div>
							</div>

						</div>
					</div>
				);
			})}
		</div>
	);
}
