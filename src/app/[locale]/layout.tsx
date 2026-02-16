import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import PageTransitionProvider from "@/providers/PageTransitionProvider";


export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	const messages = (await import(`../../../messages/${locale}.json`)).default;

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<PageTransitionProvider>
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
			</PageTransitionProvider>
		</NextIntlClientProvider>
	);
}
