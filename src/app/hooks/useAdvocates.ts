import { useContext } from "react";
import { AdvocatesContext } from "@contexts";
import { AdvocateType } from "@types";

export const useAdvocates = (): AdvocateType[] => {
	const context = useContext(AdvocatesContext);
	if (!context) {
		throw new Error("useAdvocates must be used within an AdvocatesProvider");
	}

	const advocates = context.advocates;
	return advocates;
};
