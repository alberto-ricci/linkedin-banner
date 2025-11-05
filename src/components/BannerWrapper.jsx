import React from "react";

export default function BannerWrapper({ children, bannerRef }) {
	return (
		<div
			ref={bannerRef}
			className="relative flex flex-col justify-between text-white
        bg-linear-to-tr from-gray-900 via-blue-950 to-indigo-900
        rounded-2xl shadow-xl overflow-hidden
        w-[1584px] h-[396px] px-16 py-10 border border-blue-500/20"
		>
			{/* Content area */}
			<div className="relative z-10 flex flex-col items-end text-right h-full justify-between pr-12">
				{children}
			</div>

			{/* Accent line */}
			<div className="absolute bottom-0 left-0 w-full h-[3px] bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
		</div>
	);
}
