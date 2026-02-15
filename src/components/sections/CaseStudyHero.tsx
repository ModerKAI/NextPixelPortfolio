import Image from "next/image";

interface CaseStudyHeroProps {
	title: string;
	titleAccent: string;
	image: string;
	imageAlt: string;
	video?: string;
}

export default function CaseStudyHero({
	title,
	titleAccent,
	image,
	imageAlt,
	video,
}: CaseStudyHeroProps) {
	return (
		<section className="pt-24 px-4 overflow-hidden">
			<h1 className="text-[18vw] leading-[0.85] font-bold uppercase tracking-tighter mb-8 break-words">
				{title}{" "}
				<br />
				<span className="text-primary italic">{titleAccent}</span>
			</h1>
			<div className="relative w-full aspect-[16/9] brutal-border-all overflow-hidden bg-zinc-200">
				{video ? (
					<video
						src={video}
						autoPlay
						loop
						muted
						playsInline
						className="absolute inset-0 w-full h-full object-cover"
					/>
				) : (
					<Image
						src={image}
						alt={imageAlt}
						fill
						className="object-cover"
						priority
					/>
				)}
			</div>
		</section>
	);
}
