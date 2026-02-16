"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import BackgroundGrid from "@/components/layout/BackgroundGrid";
import { useTranslations } from "next-intl";

const disciplineKeys = ["design", "engineering", "motion", "strategy"] as const;

interface FormErrors {
	name?: string;
	email?: string;
	portfolioLink?: string;
}

export default function CareersPage() {
	const t = useTranslations("careers");
	const [activeDiscipline, setActiveDiscipline] = useState<string>("design");
	const [fileName, setFileName] = useState<string | null>(null);
	const [fileBase64, setFileBase64] = useState<string | null>(null);
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
	const [errors, setErrors] = useState<FormErrors>({});
	const [serverError, setServerError] = useState<string>("");
	const fileInputRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const validate = (name: string, email: string, portfolioLink: string): FormErrors => {
		const errs: FormErrors = {};
		if (!name || name.trim().length < 2) errs.name = t("errorMin2");
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !emailRegex.test(email)) errs.email = t("errorEmail");
		if (portfolioLink && portfolioLink.trim() !== "" && !/^https?:\/\/.+\..+/.test(portfolioLink)) {
			errs.portfolioLink = t("errorUrl");
		}
		return errs;
	};

	const toBase64 = (file: File): Promise<string> =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const result = reader.result as string;
				resolve(result.split(",")[1]);
			};
			reader.onerror = reject;
		});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const form = formRef.current;
		if (!form) return;

		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const portfolioLink = formData.get("portfolioLink") as string;

		const validationErrors = validate(name, email, portfolioLink);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length > 0) return;

		setStatus("sending");
		setServerError("");

		try {
			const res = await fetch("/api/careers", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					email,
					discipline: activeDiscipline,
					portfolioLink,
					fileName: fileName || undefined,
					fileBase64: fileBase64 || undefined,
				}),
			});

			const data = await res.json();

			if (!res.ok) {
				setServerError(data.error || t("errorGeneric"));
				setStatus("error");
				return;
			}

			setStatus("success");
			form.reset();
			setFileName(null);
			setFileBase64(null);
		} catch {
			setServerError(t("errorNetwork"));
			setStatus("error");
		}
	};

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setFileName(file.name);
			const b64 = await toBase64(file);
			setFileBase64(b64);
		}
	};

	const handleDropZoneClick = () => fileInputRef.current?.click();

	const removeFile = (e: React.MouseEvent) => {
		e.stopPropagation();
		setFileName(null);
		setFileBase64(null);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	const handleDrop = async (e: React.DragEvent) => {
		e.preventDefault();
		const file = e.dataTransfer.files?.[0];
		if (file) {
			setFileName(file.name);
			const b64 = await toBase64(file);
			setFileBase64(b64);
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
						{t("successTitle")}
					</h1>
					<p className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-8">
						{t("successMessage")}
					</p>
					<button
						onClick={() => setStatus("idle")}
						className="bg-black text-white py-4 px-8 font-black uppercase tracking-tighter text-sm active:scale-[0.98] transition-transform"
					>
						{t("sendAnother")}
					</button>
				</main>
				<BackgroundGrid />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main className="relative pb-10">
				<section className="p-6 pt-12">
					<h1 className="text-huge font-bold uppercase -ml-1 mb-8">
						{t("title1")}
						<br />
						{t("title2")}
					</h1>
					<div className="w-full h-1 bg-black mb-12" />
				</section>

				<form ref={formRef} className="px-6 space-y-0" onSubmit={handleSubmit}>
					<div className="border-b-2 border-black mb-6">
						<label className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">
							{t("nameLabel")}
						</label>
						<input
							name="name"
							className="brutal-input"
							placeholder={t("namePlaceholder")}
							type="text"
						/>
						{errors.name && (
							<p className="text-red-500 text-xs font-bold mb-2">{errors.name}</p>
						)}
					</div>

					<div className="border-b-2 border-black mb-6">
						<label className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">
							{t("emailLabel")}
						</label>
						<input
							name="email"
							className="brutal-input"
							placeholder={t("emailPlaceholder")}
							type="email"
						/>
						{errors.email && (
							<p className="text-red-500 text-xs font-bold mb-2">{errors.email}</p>
						)}
					</div>

					<div className="mb-8">
						<label className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4 block">
							{t("disciplineLabel")}
						</label>
						<div className="grid grid-cols-2 gap-3">
							{disciplineKeys.map((d) => (
								<button
									key={d}
									type="button"
									className={`discipline-tag text-center ${activeDiscipline === d ? "active" : ""}`}
									onClick={() => setActiveDiscipline(d)}
								>
									{t(d)}
								</button>
							))}
						</div>
					</div>

					<div className="border-b-2 border-black mb-6">
						<label className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">
							{t("portfolioLabel")}
						</label>
						<input
							name="portfolioLink"
							className="brutal-input"
							placeholder={t("portfolioPlaceholder")}
							type="url"
						/>
						{errors.portfolioLink && (
							<p className="text-red-500 text-xs font-bold mb-2">{errors.portfolioLink}</p>
						)}
					</div>

					<div className="mb-12">
						<label className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">
							{t("fileLabel")}
						</label>
						<div
							className="drop-zone bg-white/50 cursor-pointer"
							onClick={!fileName ? handleDropZoneClick : undefined}
							onDrop={handleDrop}
							onDragOver={(e) => e.preventDefault()}
						>
							<span className="material-symbols-outlined text-4xl mb-2">
								{fileName ? "description" : "upload_file"}
							</span>
							{fileName ? (
								<div className="flex items-center gap-3">
									<p className="font-bold uppercase text-xs tracking-tighter">
										{fileName}
									</p>
									<button
										type="button"
										onClick={removeFile}
										className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-black hover:bg-red-500 transition-colors shrink-0"
									>
										✕
									</button>
								</div>
							) : (
								<p className="font-bold uppercase text-xs tracking-tighter">
									{t("dropText")}
								</p>
							)}
							<p className="text-[9px] font-mono mt-2 text-gray-400">
								{t("maxSize")}
							</p>
						</div>
						<input
							ref={fileInputRef}
							type="file"
							className="hidden"
							accept=".pdf,.doc,.docx"
							onChange={handleFileChange}
						/>
					</div>

					{serverError && (
						<div className="mb-6 p-4 bg-red-50 border-2 border-red-500">
							<p className="text-red-600 text-sm font-bold uppercase">{serverError}</p>
						</div>
					)}

					<button
						className="w-full bg-black text-white py-8 px-6 flex justify-between items-center group active:scale-[0.98] transition-transform disabled:opacity-50"
						type="submit"
						disabled={status === "sending"}
					>
						<span className="text-2xl font-black uppercase tracking-tighter">
							{status === "sending" ? t("submitting") : t("submitButton")}
						</span>
						<span className="material-icons text-3xl group-hover:translate-x-2 transition-transform">
							{status === "sending" ? "sync" : "arrow_forward"}
						</span>
					</button>
				</form>

				<section className="p-6 mt-12 border-t-2 border-black/10">
					<div className="flex items-start gap-4">
						<div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
							<span className="material-icons text-sm">security</span>
						</div>
						<div>
							<p className="font-mono text-[9px] leading-tight text-gray-500 uppercase">
								{t("securityNote")}
							</p>
						</div>
					</div>
				</section>
			</main>

			<div className="fixed bottom-0 left-0 right-0 z-40 px-6 py-6 pointer-events-none">
				<div className="flex justify-between items-end pointer-events-auto">
					<div className="bg-black text-white border-4 border-black p-3 flex flex-col gap-1">
						<span className="text-[9px] uppercase font-black text-gray-500 tracking-tighter">
							{t("statusLabel")}
						</span>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
							<span className="text-[10px] font-black uppercase">
								{t("statusText")}
							</span>
						</div>
					</div>
				</div>
			</div>
			<BackgroundGrid />
		</>
	);
}
