import TransitionLink from "@/components/ui/TransitionLink";
import Navbar from "@/components/layout/Navbar";
import ContactBar from "@/components/layout/ContactBar";

interface TeamMember {
	name: string;
	role: string;
	image: string;
	description: string;
}

const teamMembers: TeamMember[] = [
	{
		name: "POLINA",
		role: "Design Lead",
		image: "/polina.gif",
		description: "Architecting the unseen. Building the impossible. Mastery over design.",
	},
	{
		name: "ARTUR",
		role: "Coder / Co-CEO",
		image: "/artur.gif",
		description: "Architecting the unseen. Building the impossible. Mastery over code.",
	},
	{
		name: "Misha",
		role: "Salesman / Co-CEO",
		image: "/misha.gif",
		description: "Driving growth and forging partnerships. Turning vision into business reality.",
	},
];

import TeamScrollSequence from "@/components/animations/TeamScrollSequence";

export default function TeamPage() {
	return (
		<>
			<Navbar variant="team" />
			<main className="relative bg-white text-black">
				<section className="h-[50vh] flex flex-col justify-end p-6 border-b-4 border-black sticky top-0">
					<h1 className="text-huge font-bold uppercase -ml-1">
						THE
						<br />
						ARCHITECTS
					</h1>
					<div className="w-full h-1 bg-black mt-8" />
				</section>

				<div className="relative z-30 -mt-4">
					<TeamScrollSequence members={teamMembers} />
				</div>

				<section className="h-screen relative z-40 flex flex-col items-center justify-center text-center space-y-8 bg-white text-black">
					<h2 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter leading-none">
						JOIN THE
						<br />
						REVOLUTION
					</h2>
					<p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
						Always seeking elite talent
					</p>
					<TransitionLink
						href="/careers"
						className="group relative flex items-center gap-4 bg-black text-white border-4 border-black p-2 rounded-full toggle-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
					>
						<span className="pl-6 pr-2 font-black uppercase tracking-widest text-sm">
							Careers
						</span>
						<div className="w-16 h-10 bg-white rounded-full p-1 flex items-center transition-colors group-hover:bg-primary">
							<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
								<span className="material-icons text-white text-sm">
									north_east
								</span>
							</div>
						</div>
					</TransitionLink>
				</section>
			</main>
			<ContactBar variant="team" />
		</>
	);
}
