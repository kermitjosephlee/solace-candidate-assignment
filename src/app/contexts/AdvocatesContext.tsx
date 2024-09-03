import React, { createContext, useState, useEffect, ReactNode } from "react";
import { AdvocateType } from "@/types";

export interface AdvocatesContextType {
	advocates: AdvocateType[];
	advocatesLength?: number;
	fetchAdvocates: (signal: AbortSignal) => Promise<void>;
	isAdvocateLoading: boolean;
	isAdvocateLoadingInitial: boolean;
}

export const AdvocatesContext = createContext<AdvocatesContextType | undefined>(
	undefined
);

export const AdvocatesProvider = ({ children }: { children: ReactNode }) => {
	const [advocates, setAdvocates] = useState<AdvocateType[]>([]);
	const [advocatesLength, setAdvocatesLength] = useState<number>(0);
	const [isAdvocateLoading, setIsAdvocateLoading] = useState<boolean>(false);
	const [isAdvocateLoadingInitial, setIsAdvocateLoadingInitial] =
		useState<boolean>(true);

	const fetchAdvocates = async (signal: AbortSignal) => {
		setIsAdvocateLoading(true);
		try {
			const response = await fetch("/api/advocates", { signal });
			if (!response.ok) {
				throw new Error(
					`Network response was not ok \nResponse Status: ${response.status}`
				);
			}
			const jsonResponse = await response.json();
			setAdvocates(jsonResponse.data);
			setAdvocatesLength(jsonResponse.total);
		} catch (err) {
			console.log(err);
		} finally {
			setIsAdvocateLoading(false);
			setIsAdvocateLoadingInitial(false);
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;

		fetchAdvocates(signal);

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<AdvocatesContext.Provider
			value={{
				advocates,
				advocatesLength,
				fetchAdvocates,
				isAdvocateLoading,
				isAdvocateLoadingInitial,
			}}>
			{children}
		</AdvocatesContext.Provider>
	);
};
