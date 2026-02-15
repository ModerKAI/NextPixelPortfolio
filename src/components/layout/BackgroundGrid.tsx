export default function BackgroundGrid() {
	return (
		<div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
			<div className="grid grid-cols-4 h-full w-full divide-x divide-black">
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
}
