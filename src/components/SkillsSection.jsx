import React from "react";
import {
	FaRobot,
	FaGamepad,
	FaProjectDiagram,
	FaHandsHelping,
	FaCode,
} from "react-icons/fa";

export default function SkillsSection() {
	const roles = [
		{ icon: <FaProjectDiagram />, label: "Project Management" },
		{ icon: <FaCode />, label: "Programming" },
		{ icon: <FaRobot />, label: "AI & Automation" },
		{ icon: <FaGamepad />, label: "Game Dev" },
		{ icon: <FaHandsHelping />, label: "Volunteering" },
	];

	return (
		<div className="flex gap-10 justify-end mt-4">
			{roles.map((role, index) => (
				<div
					key={index}
					className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
				>
					<div className="text-3xl mb-1 text-sky-300">
						{role.icon}
					</div>
					<p className="text-xs text-gray-300 group-hover:text-sky-200 transition-colors whitespace-nowrap">
						{role.label}
					</p>
				</div>
			))}
		</div>
	);
}
