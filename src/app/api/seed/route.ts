import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function POST() {
	// linter not happy with db not having an insert method -- works though
	// might have to go digging through drizzle-orm to find the method
	// @ts-ignore
	const records = await db.insert(advocates).values(advocateData).returning();

	return Response.json({ advocates: records });
}
