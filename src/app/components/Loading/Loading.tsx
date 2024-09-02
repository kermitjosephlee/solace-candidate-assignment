import { Skeleton } from "@components";

export function Loading() {
	return (
		<div className="flex items-center justify-center h-80">
			<Skeleton />
		</div>
	);
}
