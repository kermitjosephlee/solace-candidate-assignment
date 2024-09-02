"use client";

import { AdvocatesTable, TopBar } from "@components";
import { AdvocatesProvider } from "@contexts";

export default function Home() {
	return (
		<main className="m-10">
			<AdvocatesProvider>
				<TopBar />
				<AdvocatesTable />
			</AdvocatesProvider>
		</main>
	);
}
