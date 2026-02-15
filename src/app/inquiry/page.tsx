"use client";

import { useState, useRef } from "react";
import TransitionLink from "@/components/ui/TransitionLink";
import Navbar from "@/components/layout/Navbar";
import BackgroundGrid from "@/components/layout/BackgroundGrid";

const projectTypes = ["Landing", "E-Commerce", "Web Design", "Custom Idea"] as const;
const budgetRanges = ["500 - 1000", "1000 - 2000", "2000 - 5000", "5000+"] as const;

interface FormErrors {
	description?: string;
}

export default function InquiryPage() {
	const [activeType, setActiveType] = useState<string>("Landing");
	const [budget, setBudget] = useState<string>("500 - 1000");
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
	const [errors, setErrors] = useState<FormErrors>({});
	const [serverError, setServerError] = useState<string>("");
	const formRef = useRef<HTMLFormElement>(null);
	const [showTooltip, setShowTooltip] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const form = formRef.current;
		if (!form) return;

		const formData = new FormData(form);
		const description = formData.get("description") as string;

		const errs: FormErrors = {};
		if (!description || description.trim().length < 10) {
			errs.description = "Please describe your project (min 10 chars)";
		}
		setErrors(errs);
		if (Object.keys(errs).length > 0) return;

		setStatus("sending");
		setServerError("");

		try {
			const res = await fetch("/api/inquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					description,
					projectType: activeType,
					budget,
				}),
			});

			const data = await res.json();

			if (!res.ok) {
				setServerError(data.error || "Something went wrong");
				setStatus("error");
				return;
			}

			setStatus("success");
			form.reset();
		} catch {
			setServerError("Network error. Try again.");
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<>
				<Navbar />
				<main className="relative pb-10 min-h-[80dvh] flex flex-col items-center justify-center text-center px-6">
					<div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-8">
						<span className="material-icons text-white text-4xl">check</span>
					</div>
					<h1 className="text-huge font-bold uppercase -ml-1 mb-4">
						RECEIVED
					</h1>
					<p className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-8">
						We&apos;ll review your inquiry and get back to you.
					</p>
					<button
						onClick={() => setStatus("idle")}
						className="bg-black text-white py-4 px-8 font-black uppercase tracking-tighter text-sm active:scale-[0.98] transition-transform"
					>
						Send Another
					</button>
				</main>
				<BackgroundGrid />
			</>
		);
	}

	return (
		<>

			<nav className="sticky top-0 z-40 bg-background-light border-b-[3px] border-black flex justify-between items-center px-6 py-4">
				<span className="font-bold tracking-tighter text-xl">NEXTPIXEL™</span>
				<TransitionLink
					href="/"
					className="font-bold uppercase text-sm border-brutal px-3 py-1 bg-white toggle-shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
				>
					Close
				</TransitionLink>
			</nav>

			<main className="relative p-6 space-y-12 pb-32">
				<header>
					<h1 className="text-huge font-bold uppercase -ml-1">
						Start a<br />Project
					</h1>
				</header>

				<form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
					<section className="space-y-4">
						<label className="text-xs font-black uppercase tracking-widest block">
							Project Description
						</label>
						<textarea
							name="description"
							className="w-full h-48 bg-white border-brutal p-6 text-xl font-bold uppercase placeholder:text-gray-300 focus:ring-0 focus:outline-none focus:border-primary transition-colors"
							placeholder="TELL US ABOUT YOUR VISION..."
						/>
						{errors.description && (
							<p className="text-red-500 text-xs font-bold">{errors.description}</p>
						)}
					</section>

					<section className="space-y-4">
						<label className="text-xs font-black uppercase tracking-widest block">
							Project Type
						</label>
						<div className="grid grid-cols-2 gap-3">
							{projectTypes.map((type) => (
								<button
									key={type}
									type="button"
									onClick={() => setActiveType(type)}
									className={`flex items-center justify-center p-4 border-brutal font-bold text-xs uppercase cursor-pointer transition-all text-center ${activeType === type
										? "bg-black text-white"
										: "bg-white hover:bg-gray-50"
										}`}
								>
									{type}
								</button>
							))}
						</div>
					</section>

					<section className="space-y-4">
						<label className="text-xs font-black uppercase tracking-widest block">
							Budget Range ($)
						</label>
						<div className="relative">
							<select
								value={budget}
								onChange={(e) => setBudget(e.target.value)}
								className="w-full bg-white border-brutal p-6 text-xl font-bold uppercase custom-select focus:ring-0 focus:outline-none focus:border-primary"
							>
								{budgetRanges.map((range) => (
									<option key={range}>{range}</option>
								))}
							</select>
						</div>
					</section>

					{serverError && (
						<div className="p-4 bg-red-50 border-2 border-red-500">
							<p className="text-red-600 text-sm font-bold uppercase">{serverError}</p>
						</div>
					)}

					<section className="pt-6">
						<button
							className="w-full group relative flex items-center justify-between bg-black text-white border-brutal p-2 rounded-full toggle-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-50"
							type="submit"
							disabled={status === "sending"}
						>
							<span className="pl-8 font-black uppercase tracking-widest text-lg">
								{status === "sending" ? "Sending..." : "Send Inquiry"}
							</span>
							<div className="w-16 h-16 bg-white rounded-full p-1 flex items-center justify-center group-hover:bg-primary transition-colors">
								<div className="w-10 h-10 border-brutal border-3 rounded-full flex items-center justify-center bg-black">
									<span className="material-icons text-white">
										{status === "sending" ? "sync" : "arrow_forward"}
									</span>
								</div>
							</div>
						</button>
					</section>
				</form>

				<footer className="flex justify-center pt-8">
					<div className="bg-black text-white border-brutal px-4 py-2 flex items-center gap-3">
						<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
						<span className="text-[10px] font-black uppercase tracking-widest">
							Team Available for Q4
						</span>
					</div>
				</footer>
			</main>

			<div className="fixed bottom-0 left-0 right-0 z-40 px-6 py-6 pointer-events-none">
				<div className="flex justify-end items-end pointer-events-auto relative">
					{showTooltip && (
						<div className="absolute bottom-full right-0 mb-4 bg-black text-white border-brutal p-4 w-64 animate-in fade-in slide-in-from-bottom-2 duration-300">
							<div className="flex justify-between items-start mb-2">
								<span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
									Direct Contact
								</span>
								<button
									onClick={() => setShowTooltip(false)}
									className="text-white hover:text-gray-300"
								>
									<span className="material-icons text-sm">close</span>
								</button>
							</div>
							<a
								href="mailto:nextpixelwld@gmail.com"
								className="text-sm font-bold underline hover:text-primary transition-colors"
							>
								nextpixelwld@gmail.com
							</a>
						</div>
					)}

					<div className="flex flex-col gap-2">
						<button
							onClick={() => setShowTooltip(!showTooltip)}
							className="bg-white border-brutal p-4 rounded-full flex items-center justify-center toggle-shadow active:translate-x-1 active:translate-y-1 active:shadow-none"
						>
							<span className="material-icons font-bold">help_outline</span>
						</button>
					</div>
				</div>
			</div>
			<BackgroundGrid />
		</>
	);
}
