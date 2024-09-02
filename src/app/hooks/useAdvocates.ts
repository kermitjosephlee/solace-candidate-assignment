import { useContext } from "react";
import { AdvocatesContext } from "@contexts";
import { AdvocateType } from "@types";

export const useAdvocates = (): {
	advocates: AdvocateType[];
	isAdvocateLoading: boolean;
} => {
	const context = useContext(AdvocatesContext);
	if (!context) {
		throw new Error("useAdvocates must be used within an AdvocatesProvider");
	}

	const { advocates, isAdvocateLoading } = context;

	return { advocates, isAdvocateLoading };
};
