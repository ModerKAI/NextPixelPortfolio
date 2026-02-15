"use client";

import { useRef } from "react";
import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";

interface Project {
	number: string;
	category: string;
	title: string;
	image: string;
	alt: string;
	slug: string;
}

const projects: Project[] = [
	{
		number: "01",
		category: "EDU",
		title: "Nighthold Academy",
		slug: "nighthold-academy",
		image: "/nighthold2.jpg",
		alt: "Nighthold Academy — online education platform",
	},
];

export default function ProjectList() {
	const containerRef = useRef<HTMLElement>(null);

	return (
		<section ref={containerRef} className="mt-12">

			<div className="px-6 py-4 border-y-[3px] border-black flex justify-between items-center bg-black text-white">
				<span className="uppercase font-bold tracking-widest text-xs">
					Featured Projects
				</span>
				<span className="material-icons text-sm">arrow_downward</span>
			</div>

			<div className="divide-y-[3px] divide-black border-b-[3px] border-black">
				{projects.map((project) => (
					<TransitionLink
						key={project.slug}
						href={`/works/${project.slug}`}
						className="group relative block overflow-hidden bg-background-light"
						data-project={project.slug}
					>
						<div className="p-6 flex justify-between items-end transition-all duration-300">
							<div>
								<span className="text-xs font-bold text-gray-400">
									{project.number} / {project.category}
								</span>
								<h3 className="text-4xl font-bold uppercase group-hover:text-primary transition-colors">
									{project.title}
								</h3>
							</div>
							<span className="material-icons text-3xl">north_east</span>
						</div>

						<div className="h-64 md:h-0 md:group-hover:h-64 transition-all duration-500 ease-in-out overflow-hidden px-6 pb-6">
							<div className="w-full h-full border-brutal overflow-hidden relative">
								<Image
									src={project.image}
									alt={project.alt}
									fill
									className="object-cover grayscale"
								/>
							</div>
						</div>
					</TransitionLink>
				))}
			</div>
		</section>
	);
}
