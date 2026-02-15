export default function WorksHero() {
	return (
		<div className="px-6 pt-12 pb-8 flex justify-between items-end">
			<h1 className="text-xs font-black uppercase tracking-[0.2em]">
				Selected
				<br />
				Works &apos;24
			</h1>
			<button className="border-brutal px-4 py-2 flex items-center gap-2 bg-white hover:bg-black hover:text-white transition-colors duration-200">
				<span className="text-xs font-bold uppercase tracking-widest">
					Filter
				</span>
				<span className="material-symbols-outlined text-sm">tune</span>
			</button>
		</div>
	);
}
