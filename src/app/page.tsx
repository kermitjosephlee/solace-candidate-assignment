"use client";

import { useEffect, useState } from "react";
import { AdvocateType } from "@types";
import { AdvocatesTable, TopBar } from "@components";

export default function Home() {
	const [advocates, setAdvocates] = useState<AdvocateType[]>([]);
	const [filteredAdvocates, setFilteredAdvocates] = useState<AdvocateType[]>(
		[]
	);

	const fetchAdvocates = async () => {
		try {
			const response = await fetch("/api/advocates");
			if (!response.ok) {
				throw new Error(
					`Network response was not ok \nResponse Status: ${response.status}`
				);
			}
			const jsonResponse = await response.json();
			setAdvocates(jsonResponse.data);
			setFilteredAdvocates(jsonResponse.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchAdvocates();
	}, [setAdvocates, setFilteredAdvocates]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		const searchTermEl = document.getElementById("search-term");

		if (searchTermEl === null) {
			return;
		}

		searchTermEl.innerHTML = searchTerm;

		console.log("filtering advocates...");
		const filteredAdvocates = advocates.filter((advocate) => {
			return (
				advocate.firstName === searchTerm ||
				advocate.lastName === searchTerm ||
				advocate.city === searchTerm ||
				advocate.degree === searchTerm ||
				advocate.specialties.includes(searchTerm) ||
				advocate.yearsOfExperience >= parseInt(searchTerm, 10)
			);
		});

		setFilteredAdvocates(filteredAdvocates);
	};

	const onClick = () => {
		console.log(advocates);
		setFilteredAdvocates(advocates);
	};

	return (
		<main className="m-2">
			<TopBar />
			<AdvocatesTable advocates={filteredAdvocates} />
		</main>
	);
}
