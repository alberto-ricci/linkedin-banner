import React from "react";

export default function HeaderSection() {
	return (
		<div className="space-y-2">
			{/* Name unchanged */}
			<h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.25)]">
				Alberto Ricci
			</h1>

			{/* Increased about +30% */}
			<p className="text-[1.35rem] text-gray-200 leading-snug">
				Automation Architect – AI & Telemetry @ The Access Group
			</p>

			<p className="text-sky-300 text-[1.35rem] font-medium">
				Aspiring Game Developer 🎮 | Creative Technologist 💡
			</p>
		</div>
	);
}
