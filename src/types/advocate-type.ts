import { SpecialtyType } from "@types";

export type AdvocateType = {
	id: string;
	firstName: string;
	lastName: string;
	city: string;
	degree: string;
	specialties: SpecialtyType[];
	yearsOfExperience: number;
	phoneNumber: number;
};
