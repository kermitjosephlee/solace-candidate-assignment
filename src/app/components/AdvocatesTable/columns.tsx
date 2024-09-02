import { ColumnDef } from "@tanstack/react-table";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@components";
import { MoreHorizontal } from "lucide-react";

import { AdvocateType } from "@types";

export const columns: ColumnDef<AdvocateType>[] = [
	{
		accessorKey: "firstName",
		header: "First Name",
	},
	{
		accessorKey: "lastName",
		header: "Last Name",
	},
	{
		accessorKey: "city",
		header: "City",
	},
	{
		accessorKey: "degree",
		header: "Degree",
	},
	{
		accessorKey: "specialties",
		header: "Specialties",
		cell: ({ row }) => {
			return (
				<>
					{row.original.specialties.map((specialty: string) => (
						<div key={specialty}>{specialty}</div>
					))}
				</>
			);
		},
	},
	{
		accessorKey: "yearsOfExperience",
		header: "Years of Experience",
	},
	{
		accessorKey: "phoneNumber",
		header: "Phone Number",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const advocate = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(advocate.phoneNumber.toString())
							}>
							Copy Advocate Telephone Numnber
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Edit Profile</DropdownMenuItem>
						<DropdownMenuItem>Delete Profile</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
