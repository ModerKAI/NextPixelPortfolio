import Navbar from "@/components/layout/Navbar";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyInfoGrid from "@/components/sections/CaseStudyInfoGrid";
import CaseStudyContent from "@/components/sections/CaseStudyContent";
import NextProject from "@/components/sections/NextProject";

const projectData: Record<
	string,
	{
		title: string;
		titleAccent: string;
		image: string;
		imageAlt: string;
		client: string;
		services: string;
		year: string;
		link: string;
		video?: string;
		nextProject: { title: string; slug: string };
	}
> = {
	"nighthold-academy": {
		title: "NIGHTHOLD",
		titleAccent: "ACADEMY",
		image: "/nighthold2.jpg",
		imageAlt: "Nighthold Academy — online education platform",
		client: "NIGHTHOLD",
		services: "WEB DESIGN / DEV",
		year: "2026",
		link: "https://nighthold.academy",
		video: "/nighthold.mp4",
		nextProject: { title: "NIGHTHOLD\nACADEMY", slug: "nighthold-academy" },
	},
};

export function generateStaticParams() {
	return Object.keys(projectData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	return params.then((p) => {
		const data = projectData[p.slug];
		return {
			title: data
				? `${data.title} ${data.titleAccent} — Case Study | NextPixel`
				: "Case Study | NextPixel",
		};
	});
}

export default async function CaseStudyPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const data = projectData[slug];

	if (!data) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-2xl font-bold">Project not found</p>
			</div>
		);
	}

	return (
		<>
			<Navbar variant="case-study" />
			<CaseStudyHero
				title={data.title}
				titleAccent={data.titleAccent}
				image={data.image}
				imageAlt={data.imageAlt}
				video={data.video}
			/>
			<CaseStudyInfoGrid
				items={[
					{ label: "Client", value: data.client },
					{ label: "Services", value: data.services },
					{ label: "Year", value: data.year },
				]}
			/>
			{data.link && (
				<section className="mt-8 px-4">
					<a
						href={data.link}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full group relative flex items-center justify-between bg-black text-white border-brutal p-2 rounded-full toggle-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
					>
						<span className="pl-8 font-black uppercase tracking-widest text-lg">
							Visit Site
						</span>
						<div className="w-16 h-16 bg-white rounded-full p-1 flex items-center justify-center group-hover:bg-primary transition-colors">
							<div className="w-10 h-10 border-brutal border-3 rounded-full flex items-center justify-center bg-black">
								<span className="material-icons text-white">arrow_forward</span>
							</div>
						</div>
					</a>
				</section>
			)}
			<CaseStudyContent />
			<NextProject
				title={data.nextProject.title}
				slug={data.nextProject.slug}
			/>
			<div className="h-8 w-full bg-white" />
		</>
	);
}
