import React, { useRef } from "react";
import HeaderSection from "./HeaderSection";
import SkillsSection from "./SkillsSection";
import FooterSection from "./FooterSection";
import BannerWrapper from "./BannerWrapper";

import * as htmlToImage from "html-to-image";

export default function Banner() {
	const bannerRef = useRef(null);

	const handleDownload = async () => {
		if (!bannerRef.current) return;

		try {
			const dataUrl = await htmlToImage.toJpeg(bannerRef.current, {
				quality: 0.95,
				width: 1584,
				height: 396,
			});
			const link = document.createElement("a");
			link.download = "Alberto_Ricci_LinkedIn_Banner_1584x396.jpg";
			link.href = dataUrl;
			link.click();
		} catch (error) {
			console.error("Failed to export banner:", error);
		}
	};

	return (
		<div className="flex flex-col items-center gap-4">
			{/* Banner */}
			<BannerWrapper bannerRef={bannerRef}>
				<HeaderSection />
				<SkillsSection />
				<FooterSection />
			</BannerWrapper>

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
