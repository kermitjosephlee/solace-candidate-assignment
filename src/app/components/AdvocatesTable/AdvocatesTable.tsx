"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";


import {
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
	VisibilityState,
} from "@tanstack/react-table";

import {
	AdvocateDialog,
	Button,
	Dialog,
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
	Input,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@components";

import { useAdvocates } from "@hooks";
import { columns } from "./columns";
import { AdvocateType } from "@types";

export function AdvocatesTable() {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [selectedRow, setSelectedRow] = useState<AdvocateType | null>(null);
	const [inputValue, setInputValue] = useState<string>("");

	const { advocates, isAdvocateLoading, isAdvocateLoadingInitial } =
		useAdvocates();

	const table = useReactTable({
		data: advocates,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onSortingChange: setSorting,
		pageCount: 20,
		state: {
			sorting,
			columnVisibility,
		},
	});

	const showRows = table.getFilteredRowModel().rows.length > 0;
	const showNoResults =
		!isAdvocateLoading && !isAdvocateLoadingInitial && advocates.length === 0;
	const showLoading =
		(isAdvocateLoading || isAdvocateLoadingInitial) && advocates.length === 0;

	const onClickRow = (row: AdvocateType) => {
		if (!!selectedRow && selectedRow.id === row.id) {
			setSelectedRow(null);
			return;
		}
		setSelectedRow(row);
	};

	const onCloseDialog = () => {
		setSelectedRow(null);
	};

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
		table.setGlobalFilter(inputValue);
	};

	return (
		<Dialog open={!!selectedRow}>
			<div className="w-full">
				<div className="flex items-center py-4">
					<Input
						placeholder="Search"
						value={inputValue}
						onChange={onChangeInput}
						className="max-w-sm"
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="ml-auto">
								Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{table
								.getAllColumns()
								.filter((column) => column.getCanHide())
								.map((column) => {
									return (
										<DropdownMenuCheckboxItem
											key={column.id}
											className="capitalize"
											checked={column.getIsVisible()}
											onCheckedChange={(value) =>
												column.toggleVisibility(!!value)
											}>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="rounded-md border">
					<Table>
						<TableHeader>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										return (
											<TableHead key={header.id}>
												{header.isPlaceholder
													? null
													: flexRender(
															header.column.columnDef.header,
															header.getContext()
													  )}
											</TableHead>
										);
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{showRows &&
								table.getRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										data-state={row.getIsSelected() && "selected"}
										className="cursor-pointer"
										onClick={() => onClickRow(row.original)}>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
								))}
							{showNoResults && (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center"></TableCell>
								</TableRow>
							)}
							{showLoading && (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center">
										Loading...
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<div className="flex items-center justify-end space-x-2 py-4">
					<div className="space-x-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}>
							Next
						</Button>
					</div>
				</div>
			</div>
			{!!selectedRow && (
				<AdvocateDialog advocate={selectedRow} onCloseDialog={onCloseDialog} />
			)}
		</Dialog>
	);
}
