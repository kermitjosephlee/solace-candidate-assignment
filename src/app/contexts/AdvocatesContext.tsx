import React, { createContext, useState, useEffect, ReactNode } from "react";
import { AdvocateType } from "@/types";

export interface AdvocatesContextType {
	advocates: AdvocateType[];
	fetchAdvocates: () => Promise<void>;
}

export const AdvocatesContext = createContext<AdvocatesContextType | undefined>(
	undefined
);

export const AdvocatesProvider = ({ children }: { children: ReactNode }) => {
	const [advocates, setAdvocates] = useState<AdvocateType[]>([]);

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
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchAdvocates();
	}, []);

	return (
		<AdvocatesContext.Provider value={{ advocates, fetchAdvocates }}>
			{children}
		</AdvocatesContext.Provider>
	);
};
