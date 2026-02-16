"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import Navbar from "@/components/layout/Navbar";
import ContactBar from "@/components/layout/ContactBar";
import TeamScrollSequence from "@/components/animations/TeamScrollSequence";
import { useTranslations } from "next-intl";

export default function TeamPage() {
	const t = useTranslations("team");

	const teamMembers = [
		{
			name: "POLINA",
			role: t("polinaRole"),
			image: "/polina.gif",
			description: t("polinaDesc"),
		},
		{
			name: "ARTUR",
			role: t("arturRole"),
			image: "/artur.gif",
			description: t("arturDesc"),
		},
		{
			name: "Misha",
			role: t("mishaRole"),
			image: "/misha.gif",
			description: t("mishaDesc"),
		},
	];

	return (
		<>
			<Navbar variant="team" />
			<main className="relative bg-white text-black">
				<section className="h-[50vh] flex flex-col justify-end p-6 border-b-4 border-black sticky top-0">
					<h1 className="text-huge font-bold uppercase -ml-1">
						{t("title1")}
						<br />
						{t("title2")}
					</h1>
					<div className="w-full h-1 bg-black mt-8" />
				</section>

				<div className="relative z-30 -mt-4">
					<TeamScrollSequence members={teamMembers} />
				</div>

				<section className="h-screen relative z-40 flex flex-col items-center justify-center text-center space-y-8 bg-white text-black">
					<h2 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter leading-none">
						{t("joinTitle1")}
						<br />
						{t("joinTitle2")}
					</h2>
					<p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
						{t("seekingTalent")}
					</p>
					<TransitionLink
						href="/careers"
						className="group relative flex items-center gap-4 bg-black text-white border-4 border-black p-2 rounded-full toggle-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
					>
						<span className="pl-6 pr-2 font-black uppercase tracking-widest text-sm">
							{t("careersButton")}
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
