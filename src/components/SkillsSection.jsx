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
		{ icon: <FaProjectDiagram />, label: "Agile Project Management" },
		{ icon: <FaCode />, label: "Full Stack Programming" },
		{ icon: <FaRobot />, label: "AI & Automation" },
		{ icon: <FaGamepad />, label: "Game Dev" },
		{ icon: <FaHandsHelping />, label: "Volunteering" },
	];

	return (
		<div className="flex gap-16 justify-end mt-6">
			{roles.map((role, index) => (
				<div
					key={index}
					className="flex flex-col items-center group "
				>
					<div className="text-7xl mb-2 text-sky-300">
						{role.icon}
					</div>
					<p className="text-xl text-gray-300  whitespace-nowrap">
						{role.label}
					</p>
				</div>
			))}
		</div>
	);
}
