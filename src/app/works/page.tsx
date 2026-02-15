"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactBar from "@/components/layout/ContactBar";
import GrainOverlay from "@/components/layout/GrainOverlay";
import WorksProjectList from "@/components/sections/WorksProjectList";

export default function WorksPage() {
	return (
		<>
			<GrainOverlay />
			<Navbar variant="works" />
			<main className="relative">
				<div className="px-6 pt-12 pb-8 flex justify-between items-end">
					<h1 className="text-xs font-black uppercase tracking-[0.2em]">
						Latest<br />Works &apos;26
					</h1>
				</div>

				<WorksProjectList filter="works" />
				<div className="h-0.75 bg-black" />
			</main>
			<Footer />
			<ContactBar variant="works" />
		</>
	);
}
