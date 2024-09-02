import db from "..";
import { advocates } from "../schema";
import { faker } from "@faker-js/faker";

const getRandomHexColor = (): string => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const getRandomFirstName = () => faker.person.firstName();
const getRandomLastName = () => faker.person.lastName();
const getRandomCity = () => faker.location.city();

const getRandomDegree = () => {
	const degrees = ["MD", "PhD", "MSW"];
	return degrees[Math.floor(Math.random() * degrees.length)];
};

const getRandomYearsOfExperience = () => Math.floor(Math.random() * 15);
const getRandomPhoneNumber = () =>
	faker.phone.number().toString().replace(/-/g, "");

const specialtiesTitles = [
	"Attention and Hyperactivity (ADHD)",
	"Bipolar",
	"Chronic pain",
	"Coaching (leadership, career, academic and wellness)",
	"Diabetic Diet and nutrition",
	"Domestic abuse",
	"Eating disorders",
	"General Mental Health (anxiety, depression, stress, grief, life transitions)",
	"Learning disorders",
	"LGBTQ",
	"Life coaching",
	"Medication/Prescribing",
	"Men's issues",
	"Neuropsychological evaluations & testing (ADHD testing)",
	"Obsessive-compulsive disorders",
	"Pediatrics",
	"Personal growth",
	"Personality disorders",
	"Relationship Issues (family, friends, couple, etc)",
	"Schizophrenia and psychotic disorders",
	"Sleep issues",
	"Substance use/abuse",
	"Suicide History/Attempts",
	"Trauma & PTSD",
	"Weight loss & nutrition",
	"Women's issues (post-partum, infertility, family planning)",
];

const specialties = specialtiesTitles.map((each) => {
	const regex = /^(.*?)\s*\((.*?)\)$/;
	const match = each.match(regex);
	const color = getRandomHexColor();

	if (match) {
		return {
			title: match[1].trim(),
			subtitle: match[2].trim(),
			color,
		};
	}

	return {
		title: each.trim(),
		subtitle: "",
		color,
	};
});

const randomSpecialty = () => {
	const random1 = Math.floor(Math.random() * 24);
	const random2 = Math.floor(Math.random() * (24 - random1)) + random1 + 1;

	return [random1, random2];
};

const getRandomsAdvocates = (n: number) => {
	const result = [];
	for (let i = 0; i < n; i++) {
		result.push({
			firstName: getRandomFirstName(),
			lastName: getRandomLastName(),
			city: getRandomCity(),
			degree: getRandomDegree(),
			yearsOfExperience: getRandomYearsOfExperience(),
			phoneNumber: getRandomPhoneNumber(),
			specialties: specialties.slice(...randomSpecialty()),
		});
	}
	return result;
};

const advocateData = [
	{
		firstName: "John",
		lastName: "Doe",
		city: "New York",
		degree: "MD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 10,
		phoneNumber: 5551234567,
	},
	{
		firstName: "Jane",
		lastName: "Smith",
		city: "Los Angeles",
		degree: "PhD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 8,
		phoneNumber: 5559876543,
	},
	{
		firstName: "Alice",
		lastName: "Johnson",
		city: "Chicago",
		degree: "MSW",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 5,
		phoneNumber: 5554567890,
	},
	{
		firstName: "Michael",
		lastName: "Brown",
		city: "Houston",
		degree: "MD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 12,
		phoneNumber: 5556543210,
	},
	{
		firstName: "Emily",
		lastName: "Davis",
		city: "Phoenix",
		degree: "PhD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 7,
		phoneNumber: 5553210987,
	},
	{
		firstName: "Chris",
		lastName: "Martinez",
		city: "Philadelphia",
		degree: "MSW",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 9,
		phoneNumber: 5557890123,
	},
	{
		firstName: "Jessica",
		lastName: "Taylor",
		city: "San Antonio",
		degree: "MD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 11,
		phoneNumber: 5554561234,
	},
	{
		firstName: "David",
		lastName: "Harris",
		city: "San Diego",
		degree: "PhD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 6,
		phoneNumber: 5557896543,
	},
	{
		firstName: "Laura",
		lastName: "Clark",
		city: "Dallas",
		degree: "MSW",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 4,
		phoneNumber: 5550123456,
	},
	{
		firstName: "Daniel",
		lastName: "Lewis",
		city: "San Jose",
		degree: "MD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 13,
		phoneNumber: 5553217654,
	},
	{
		firstName: "Sarah",
		lastName: "Lee",
		city: "Austin",
		degree: "PhD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 10,
		phoneNumber: 5551238765,
	},
	{
		firstName: "James",
		lastName: "King",
		city: "Jacksonville",
		degree: "MSW",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 5,
		phoneNumber: 5556540987,
	},
	{
		firstName: "Megan",
		lastName: "Green",
		city: "San Francisco",
		degree: "MD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 14,
		phoneNumber: 5559873456,
	},
	{
		firstName: "Joshua",
		lastName: "Walker",
		city: "Columbus",
		degree: "PhD",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 9,
		phoneNumber: 5556781234,
	},
	{
		firstName: "Amanda",
		lastName: "Hall",
		city: "Fort Worth",
		degree: "MSW",
		specialties: specialties.slice(...randomSpecialty()),
		yearsOfExperience: 3,
		phoneNumber: 5559872345,
	},
	...getRandomsAdvocates(100),
];

export { advocateData };
