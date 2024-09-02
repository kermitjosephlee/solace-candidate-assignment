import { AdvocateType, SpecialtyType } from "@types";

import { Button } from "@components";
import {
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	Label,
} from "@components";

export function AdvocateDialog({
	advocate,
	onCloseDialog,
}: {
	advocate: AdvocateType | null;
	onCloseDialog: () => void;
}) {
	return (
		<DialogContent className="sm:max-w-[425px]" aria-describedby={advocate?.id}>
			<DialogHeader onClick={onCloseDialog}>
				<DialogTitle>{`${advocate?.firstName} ${advocate?.lastName} ${advocate?.degree}`}</DialogTitle>
			</DialogHeader>
			<div className="grid gap-4 py-4">
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="specialities" className="text-right">
						Specialites
					</Label>
					{advocate?.specialties.map((speciality: SpecialtyType, index) => (
						<span key={index} className="text-sm text-muted-foreground">
							{speciality.title}
						</span>
					))}
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="contact" className="text-right">
						Contact {advocate?.phoneNumber}
					</Label>
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
