import { ColumnDef } from "@tanstack/react-table";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@components";

import { AdvocateType, SpecialtyType } from "@types";

export const columns: ColumnDef<AdvocateType>[] = [
	{
		accessorKey: "lastName",
		header: "Last Name",
	},
	{
		accessorKey: "firstName",
		header: "First Name",
	},
	{
		accessorKey: "degree",
		header: "Degree",
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
						if (!specialty.subtitle) {
							return (
								<div
									key={specialty.title}
									className="rounded-full border-2 p-2 cursor-default"
									style={{ borderColor: specialty.color }}>
									{specialty.title}
								</div>
							);
						}

						return (
							<TooltipProvider key={specialty.title}>
								<Tooltip>
									<TooltipTrigger asChild>
										<div
											className="rounded-full border-2 p-2 cursor-default"
											style={{ borderColor: specialty.color }}>
											{specialty.title}
										</div>
									</TooltipTrigger>
									<TooltipContent>{specialty.subtitle}</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						);
					})}
				</div>
			);
		},
	},
	{
		accessorKey: "yearsOfExperience",
		header: "Years of Experience",
		cell: ({ row }) => {
			const { yearsOfExperience } = row.original;
			return (
				<div className="flex items-center justify-center">
					{yearsOfExperience}
				</div>
			);
		},
	},
];
