"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";

const localeFlags: Record<string, string> = {
	en: "🇬🇧",
	de: "🇩🇪",
	sl: "🇸🇮",
};

const localeLabels: Record<string, string> = {
	en: "EN",
	de: "DE",
	sl: "SL",
};

export default function LanguageSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const switchLocale = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale });
		setOpen(false);
	};

	return (
		<div ref={ref} className="relative">
			<button
				onClick={() => setOpen(!open)}
				className="flex items-center gap-1.5 border-2 border-black px-2 py-1 bg-white font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
				aria-label="Change language"
			>
				<span className="text-sm leading-none">{localeFlags[locale]}</span>
				<span>{localeLabels[locale]}</span>
			</button>

			{open && (
				<div className="absolute top-full right-0 mt-1 bg-white border-2 border-black z-50 min-w-full">
					{routing.locales
						.filter((l) => l !== locale)
						.map((l) => (
							<button
								key={l}
								onClick={() => switchLocale(l)}
								className="flex items-center gap-1.5 w-full px-2 py-1.5 font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
							>
								<span className="text-sm leading-none">{localeFlags[l]}</span>
								<span>{localeLabels[l]}</span>
							</button>
						))}
				</div>
			)}
		</div>
	);
}
