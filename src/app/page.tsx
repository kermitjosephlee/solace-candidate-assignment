"use client";

import { useEffect, useState } from "react";
import { AdvocateType } from "@types";
import { TopBar } from "@components";

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
		<main style={{ margin: "24px" }}>
			<TopBar />
			<div>
				<p>Search</p>
				<p>
					Searching for: <span id="search-term"></span>
				</p>
				<input style={{ border: "1px solid black" }} onChange={onChange} />
				<button onClick={onClick}>Reset Search</button>
			</div>
			<br />
			<br />
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>City</th>
						<th>Degree</th>
						<th>Specialties</th>
						<th>Years of Experience</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
					{filteredAdvocates.map((advocate: AdvocateType) => {
						return (
							<tr key={advocate.phoneNumber}>
								<td>{advocate.firstName}</td>
								<td>{advocate.lastName}</td>
								<td>{advocate.city}</td>
								<td>{advocate.degree}</td>
								<td>
									{advocate.specialties.map((specialty) => (
										<div key={specialty}>{specialty}</div>
									))}
								</td>
								<td>{advocate.yearsOfExperience}</td>
								<td>{advocate.phoneNumber}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</main>
	);
}
