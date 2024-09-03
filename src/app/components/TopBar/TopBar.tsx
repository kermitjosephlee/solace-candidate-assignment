import React from "react";
import { TopBarIcon } from "./subcomponents";

export function TopBar() {
	return (
		<header className="flex justify-between items-baseline">
			<TopBarIcon />
			<h1>Solace Candidate Assignment</h1>
		</header>
	);
}
