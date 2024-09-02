import { ColumnDef } from "@tanstack/react-table";
import { AdvocateType, SpecialtyType } from "@types";
import cslx from "clsx";

export const columns: ColumnDef<AdvocateType>[] = [
	{
		accessorKey: "name",
		header: "Name",
		cell: ({ row }) => {
			const { firstName, lastName, degree } = row.original;
			return (
				<>
					<div>{`${firstName} ${lastName}, ${degree}`}</div>
				</>
			);
		},
	},
	{
		accessorKey: "city",
		header: "City",
	},
	{
		accessorKey: "specialties",
		header: "Specialties",
		cell: ({ row }) => {
			return (
				<div className=" flex flex-wrap gap-2">
					{row.original.specialties.sort().map((specialty: SpecialtyType) => {
						return (
							<div
								key={specialty.title}
								className="rounded-full border-2 p-2"
								style={{ borderColor: specialty.color }}>
								{specialty.title}
							</div>
						);
					})}
				</div>
			);
		},
	},
	{
		accessorKey: "yearsOfExperience",
		header: "Years of Experience",
	},
];
