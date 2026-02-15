"use client";

import { type ReactNode, type MouseEvent } from "react";
import { usePageTransition } from "@/providers/PageTransitionProvider";

interface TransitionLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
	onClick?: (e: MouseEvent<HTMLElement>) => void;
	target?: string;
	rel?: string;
	[key: string]: unknown;
}

export default function TransitionLink({
	href,
	children,
	className,
	onClick,
	target,
	rel,
	...rest
}: TransitionLinkProps) {
	const { navigateTo } = usePageTransition();

	const isExternal =
		href.startsWith("http") ||
		href.startsWith("mailto:") ||
		href.startsWith("tel:");

	if (isExternal) {
		return (
			<a href={href} className={className} target={target} rel={rel} {...rest}>
				{children}
			</a>
		);
	}

	return (
		<div
			role="link"
			tabIndex={0}
			className={className}
			style={{ cursor: "pointer" }}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				onClick?.(e);
				navigateTo(href);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					navigateTo(href);
				}
			}}
			{...rest}
		>
			{children}
		</div>
	);
}
