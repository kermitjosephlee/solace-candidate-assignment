import { useState } from "react";
import { AdvocateType } from "@/types";

export async function getAvocates(): Promise<AdvocateType[]> {
	try {
		const response = await fetch("http://locahost:3000/api/advocates");
		if (!response.ok) {
			throw new Error(
				`Network response was not ok \nResponse Status: ${response.status}`
			);
		}
		const jsonResponse = await response.json();
		console.log(jsonResponse.data);
		return jsonResponse.data;
	} catch (err) {
		console.log(err);
		return [];
	}
}
