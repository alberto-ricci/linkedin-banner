import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function FooterSection() {
	const languages = ["IT", "GB", "RO"];

	return (
		<div className="flex items-center justify-end gap-3 text-lg text-gray-200 italic mt-4">
			<span>Always happy to connect — I speak</span>
			<div className="flex gap-2">
				{languages.map((code, i) => (
					<ReactCountryFlag
						key={i}
						countryCode={code}
						svg
						style={{ width: "1.5em", height: "1.5em" }}
					/>
				))}
			</div>
		</div>
	);
}
