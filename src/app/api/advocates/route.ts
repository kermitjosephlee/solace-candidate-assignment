import { NextRequest, NextResponse } from "next/server";
import { advocateData } from "../../../db/seed/advocates";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const searchTerm = searchParams.get("searchTerm")?.toLowerCase() || "";

	const advocates = advocateData.filter(
		(advocate) =>
			advocate.firstName.toLowerCase().includes(searchTerm) ||
			advocate.lastName.toLowerCase().includes(searchTerm) ||
			advocate.city.toLowerCase().includes(searchTerm) ||
			advocate.degree.toLowerCase().includes(searchTerm) ||
			advocate.specialties.some((specialty) =>
				specialty.toLowerCase().includes(searchTerm)
			)
	);

	return NextResponse.json({ data: advocates });
}
