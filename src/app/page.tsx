import Navbar from "@/components/layout/Navbar";
import ContactBar from "@/components/layout/ContactBar";
import BackgroundGrid from "@/components/layout/BackgroundGrid";
import HeroSection from "@/components/sections/HeroSection";
import ProjectList from "@/components/sections/ProjectList";
import CTASection from "@/components/sections/CTASection";
import StudioSection from "@/components/sections/StudioSection";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<main className="relative">
				<HeroSection />
				<StudioSection />
				<ProjectList />
				<CTASection />
			</main>
			<ContactBar variant="home" />
			<BackgroundGrid />
		</>
	);
}
