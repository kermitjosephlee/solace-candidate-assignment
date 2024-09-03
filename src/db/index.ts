import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const setup = () => {
	if (!process.env.DATABASE_URL) {
		console.error("DATABASE_URL is not set");
		return {
			select: () => ({
				from: () => [],
			}),
		};
	}

	// for query purposes
	const queryClient = postgres(process.env.DATABASE_URL);
	// db does not have an insert method -- works though
	const db = drizzle(queryClient);
	return db;
};

export default setup();
