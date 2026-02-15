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
	filter: "works" | "mockups";
}

const projects: Project[] = [
	{
		number: "01",
		category: "EDU",
		title: "Nighthold Academy",
		slug: "nighthold-academy",
		filter: "works",
		image: "/nighthold2.jpg",
		alt: "Nighthold Academy — online education platform",
	},
	{
		number: "M1",
		category: "MOCKUP",
		title: "Nova Landing",
		slug: "nova-landing",
		filter: "mockups",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuC_KYA-UtcAOAXphZoFxbRCwKurU2kWDT5Cru2Apyb-KpqDRvODDBU9-HAu3Oy0fJA8EQ8SpI4VS-DVyq2Y7rAaQg8287NST6PLjouwXQo8PeId34L580q8PP2_-E_j5K_RbYctR8ESa-its2zVruzhYzOBtx5wVXmW0RY9MVMMJ0PYVF7bUz8e_RSadtCjI9SHfmjCYjBEXtHnPd3M0kJbVQI4mA8x8uTeP9XQksNzVe-LXiuDeVR8irWE14LVgK4M62piKr8FKFY",
		alt: "Nova landing mockup",
	},
	{
		number: "M2",
		category: "MOCKUP",
		title: "Pulse Dashboard",
		slug: "pulse-dashboard",
		filter: "mockups",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCZL8inlAsmCJpITBy_1Yf7fZQ6UiyjyKaWvEcoGG-gQ0AkOLLmHJOdWKaVFLS0dSlex4Hte0YuRUj5uIYFgT3MccM5jdw_MIFvur7vCfsQpF4-WS_B4P7Mv2j4oK50aItmtmwuGt5wBe-B9j60InbdWJYPG1RTssEV2b5D78tHrklZiuzo_iCiHrPzUunnDziLJDX8pbKB14yqN71J0pTuaWla5GpvPv_DxQRwIKRe5b_irIDU8uyfkmkKCV7Z0hgC1rF9poS2wNU",
		alt: "Pulse dashboard mockup",
	},
	{
		number: "M3",
		category: "MOCKUP",
		title: "Zenith Store",
		slug: "zenith-store",
		filter: "mockups",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDUqOYetTZqyNcho_sERddSMdoja1A5h6UI4U3PlYI_qG9rUYiT_f_aLrHmCC8xRBYW5WAJiRnCnDzv6dzdpcucvH5MCaR7LJSr2hutJmHgJ8VhMi4HK4rCFKF5ppTlkMcRQDjHe_1aKP5oCXL5ESlkqXwJcr8RZ_OuJJiSyIfun-jl2wsOCt91_R8PXqDz245foUaIAIOZ5yE3RD_XHnQA2llTwCCa86GKa9_B2ZLjttDOjwKvp0TsHQdQ4GlTY_b8Dy47FaTcFMo",
		alt: "Zenith store mockup",
	},
];

interface WorksProjectListProps {
	filter?: "works" | "mockups";
}

export default function WorksProjectList({ filter = "works" }: WorksProjectListProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const filtered = projects.filter((p) => p.filter === filter);

	return (
		<div ref={containerRef} className="divide-y-[3px] divide-black border-t-[3px] border-black">
			{filtered.map((project) => (
				<TransitionLink
					key={project.slug}
					href={`/works/${project.slug}`}
					className="group relative block bg-[#F2F2F2] transition-colors duration-300"
				>
					<div className="p-6 relative z-10">
						<span className="text-xs font-bold block mb-2 opacity-60">
							{project.number} / {project.category}
						</span>
						<h3 className="project-title font-condensed font-black uppercase transition-all duration-300 group-hover:pl-4 group-active:pl-4">
							{project.title}
						</h3>
					</div>

					<div className="max-h-[500px] md:max-h-0 md:group-hover:max-h-[500px] transition-all duration-500 ease-in-out overflow-hidden px-6 pb-6">
						<div className="w-full aspect-[4/5] border-brutal overflow-hidden bg-black relative">
							<Image
								src={project.image}
								alt={project.alt}
								fill
								className="object-cover grayscale contrast-125 brightness-75"
							/>
						</div>
					</div>
				</TransitionLink>
			))}
		</div>
	);
}
