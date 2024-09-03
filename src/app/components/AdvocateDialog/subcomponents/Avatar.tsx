import { AdvocateType } from "@types";

export function Avatar({ advocate }: { advocate: AdvocateType }) {
	return (
		<div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
			{advocate.firstName.charAt(0)}
			{advocate.lastName.charAt(0)}
		</div>
	);
}
