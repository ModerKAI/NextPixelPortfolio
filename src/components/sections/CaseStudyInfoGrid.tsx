interface InfoItem {
	label: string;
	value: string;
}

interface CaseStudyInfoGridProps {
	items: InfoItem[];
}

export default function CaseStudyInfoGrid({ items }: CaseStudyInfoGridProps) {
	return (
		<section className="mt-8 px-4">
			<div className="grid grid-cols-3 brutal-border-all">
				{items.map((item, i) => (
					<div
						key={item.label}
						className={`p-3 ${i < items.length - 1 ? "brutal-border-r" : ""}`}
					>
						<p className="text-[10px] font-bold uppercase opacity-50 mb-1">
							{item.label}
						</p>
						<p className="text-xs font-bold leading-tight">{item.value}</p>
					</div>
				))}
			</div>
		</section>
	);
}
