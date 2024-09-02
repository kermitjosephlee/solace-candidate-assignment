import React, { createContext, useState, useEffect, ReactNode } from "react";
import { AdvocateType } from "@/types";

export interface AdvocatesContextType {
	advocates: AdvocateType[];
	fetchAdvocates: () => Promise<void>;
	isAdvocateLoading: boolean;
}

export const AdvocatesContext = createContext<AdvocatesContextType | undefined>(
	undefined
);

export const AdvocatesProvider = ({ children }: { children: ReactNode }) => {
	const [advocates, setAdvocates] = useState<AdvocateType[]>([]);
	const [isAdvocateLoading, setIsAdvocateLoading] = useState<boolean>(false);

	const fetchAdvocates = async () => {
		setIsAdvocateLoading(true);
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
		} finally {
			setIsAdvocateLoading(false);
		}
	};

	useEffect(() => {
		fetchAdvocates();
	}, []);

	return (
		<AdvocatesContext.Provider
			value={{ advocates, fetchAdvocates, isAdvocateLoading }}>
			{children}
		</AdvocatesContext.Provider>
	);
};
