import React, { useRef } from "react";
import HeaderSection from "./HeaderSection";
import SkillsSection from "./SkillsSection";
import FooterSection from "./FooterSection";
import * as htmlToImage from "html-to-image";

export default function Banner() {
	const bannerRef = useRef(null);

	const handleDownload = async () => {
		if (!bannerRef.current) return;

		try {
			const dataUrl = await htmlToImage.toJpeg(bannerRef.current, {
				quality: 0.95,
				width: 1128,
				height: 382,
			});
			const link = document.createElement("a");
			link.download = "Alberto_Ricci_LinkedIn_Banner.jpg";
			link.href = dataUrl;
			link.click();
		} catch (error) {
			console.error("Failed to export banner:", error);
		}
	};

	return (
		<div className="flex flex-col items-center gap-4">
			{/* Banner */}
			<div
				ref={bannerRef}
				className="relative flex flex-col justify-between text-white
                 bg-linear-to-br from-slate-950 via-sky-950 to-indigo-900
                 rounded-2xl shadow-2xl overflow-hidden
                 w-[1128px] h-[382px] p-10 border border-sky-400/10"
			>
				{/* Glow accents */}
				<div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/3"></div>
				<div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

				{/* Content */}
				<div className="relative z-10 flex flex-col items-end text-right h-full justify-between">
					<HeaderSection />
					<SkillsSection />
					<FooterSection />
				</div>

				{/* Accent line */}
				<div
					className="absolute bottom-0 left-0 w-full h-[3px]
                 bg-linear-to-r from-sky-400 via-fuchsia-500 to-cyan-400"
				></div>
			</div>

			{/* Download button */}
			<button
				onClick={handleDownload}
				className="px-5 py-2 rounded-md bg-sky-600 hover:bg-sky-700
                           text-white font-medium shadow-md transition"
			>
				Download as JPG
			</button>
		</div>
	);
}
