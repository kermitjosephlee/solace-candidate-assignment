import { AdvocateType, SpecialtyType } from "@types";
import { PersonIcon } from "@radix-ui/react-icons";
import {
	Button,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	Label,
} from "@components";

import { Avatar } from "./subcomponents";

export function AdvocateDialog({
	advocate,
	onCloseDialog,
}: {
	advocate: AdvocateType;
	onCloseDialog: () => void;
}) {
	return (
		<DialogContent
			className="sm:max-w-[925px]"
			aria-describedby={advocate?.id}
			onClick={onCloseDialog}>
			<DialogHeader className="flex">
				<div className="flex items-center gap-4">
					<Avatar advocate={advocate} />
					<DialogTitle>{`${advocate?.firstName} ${advocate?.lastName} ${advocate?.degree}`}</DialogTitle>
				</div>
				<div className="flex justify-between items-center">
					<Label htmlFor="address">123 Anystreet Ave, {advocate.city}</Label>
					<div className="flex justify-end items-center">
						<PersonIcon className="m-2" />
						<Label htmlFor="contact">{advocate?.phoneNumber}</Label>
					</div>
				</div>
			</DialogHeader>
			<div>
				<Label htmlFor="specialities">Specialites</Label>
			</div>
			<div className="grid gap-4 pb-4">
				<div className="grid grid-cols-4 items-center gap-4">
					{advocate?.specialties.map((speciality: SpecialtyType, index) => (
						<span
							key={index}
							className="rounded-full border-2 text-center p-2 cursor-default"
							style={{ borderColor: speciality.color }}>
							{speciality.title}
						</span>
					))}
				</div>
			</div>
			<DialogFooter>
				<Button variant="outline" onClick={onCloseDialog}>
					Close
				</Button>
			</DialogFooter>
		</DialogContent>
	);
}
