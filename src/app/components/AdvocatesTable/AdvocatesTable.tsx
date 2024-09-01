import {
	AdvocatesTableInput,
	AdvocatesTableList,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@components";
import { AdvocateType } from "@types";

export function AdvocatesTable({ advocates }: { advocates: AdvocateType[] }) {
	return (
		<>
			<AdvocatesTableInput />
			<AdvocatesTableList />
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>First Name</TableHead>
						<TableHead>Last Name</TableHead>
						<TableHead>City</TableHead>
						<TableHead>Degree</TableHead>
						<TableHead>Specialties</TableHead>
						<TableHead>Years of Experience</TableHead>
						<TableHead>Phone Number</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{advocates.map((advocate: AdvocateType) => {
						return (
							<TableRow key={advocate.phoneNumber}>
								<TableCell>{advocate.firstName}</TableCell>
								<TableCell>{advocate.lastName}</TableCell>
								<TableCell>{advocate.city}</TableCell>
								<TableCell>{advocate.degree}</TableCell>
								<TableCell>
									{advocate.specialties.map((specialty) => (
										<div key={specialty}>{specialty}</div>
									))}
								</TableCell>
								<TableCell>{advocate.yearsOfExperience}</TableCell>
								<TableCell>{advocate.phoneNumber}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</>
	);
}
