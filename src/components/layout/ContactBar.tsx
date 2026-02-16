"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { useTranslations } from "next-intl";

interface ContactBarProps {
	variant?: "home" | "works" | "team";
}

export default function ContactBar({ variant = "home" }: ContactBarProps) {
	const t = useTranslations("contact");

	if (variant === "works") {
		return (
			<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] flex justify-between items-center pointer-events-none">
				<TransitionLink href="/inquiry" className="bg-black text-white border-brutal px-4 py-2 pointer-events-auto">
					<span className="text-[10px] font-black tracking-widest uppercase">
						{t("contact")}
					</span>
				</TransitionLink>
			</div>
		);
	}

	if (variant === "team") {
		return (
			<div className="fixed bottom-0 left-0 right-0 z-40 px-6 py-6 pointer-events-none">
				<div className="flex justify-between items-end pointer-events-auto">
					<div />
				</div>
			</div>
		);
	}

	return (
		<div className="fixed bottom-0 left-0 right-0 z-40 px-6 py-6 bg-transparent pointer-events-none">
			<div className="flex justify-between items-end pointer-events-auto">
				<div />
				<div className="flex flex-col gap-2">
					<TransitionLink
						href="/inquiry"
						className="bg-white border-brutal p-4 rounded-full flex items-center justify-center toggle-shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
					>
						<span className="material-icons font-bold">mail</span>
					</TransitionLink>
				</div>
			</div>
		</div>
	);
}

