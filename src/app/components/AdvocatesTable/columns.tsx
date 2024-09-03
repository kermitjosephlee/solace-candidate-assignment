import { ColumnDef, Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@components";

import { AdvocateType, SpecialtyType } from "@types";

const sortingButton = (
	columnName: string,
	column: Column<AdvocateType, unknown>
) => {
	return (
		<Button
			variant="ghost"
			onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
			{columnName}
			<ArrowUpDown className="ml-2 h-4 w-4" />
		</Button>
	);
};

export const columns: ColumnDef<AdvocateType>[] = [
	{
		accessorKey: "lastName",
		header: ({ column }) => sortingButton("Last Name", column),
	},
	{
		accessorKey: "firstName",
		header: ({ column }) => sortingButton("First Name", column),
	},
	{
		accessorKey: "degree",
		header: ({ column }) => sortingButton("Degree", column),
	},
	{
		accessorKey: "city",
		header: ({ column }) => sortingButton("City", column),
	},
	{
		id: "specialties",
		header: "Specialties",
		enableGlobalFilter: true,
		accessorFn: (row) => {
			return `${row.specialties
				.map(
					(specialty: SpecialtyType) =>
						`${specialty.title} ${specialty.subtitle}`
				)
				.join(", ")}`;
		},
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
		header: ({ column }) => sortingButton("Years of Experience", column),
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
