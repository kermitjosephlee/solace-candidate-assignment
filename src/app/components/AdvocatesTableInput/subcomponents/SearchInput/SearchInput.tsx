export function SearchInput() {
	return (
		<div>
			<p>Search</p>
			<p>
				Searching for: <span id="search-term"></span>
			</p>
			<input
				className="border-2 rounded-md"
				onChange={() => console.log("on change")}
			/>
			<button className="bg-red-500" onClick={() => console.log("reset")}>
				Reset Search
			</button>
		</div>
	);
}
