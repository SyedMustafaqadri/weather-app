import { useState } from "react";

const CitySearch = () => {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<button
				onClick={() => document.getElementById("my_modal_2").showModal()}
				className="p-3 hover:bg-slate-800 rounded"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
			<dialog
				id="my_modal_2"
				className="modal"
				onClose={() => (document.getElementById("cityInput").value = "")}
			>
				<div className="modal-box">
					<h3 className="font-bold text-lg">Search For City</h3>
					<p className="py-4">Press ESC key or click outside to close</p>
					<label className="input input-bordered flex items-center gap-2">
						<input
							id="cityInput"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" && inputValue.trim() !== "") {
									document.getElementById("my_modal_2").close();
									e.preventDefault();
								}
							}}
							placeholder="Search for City"
							className="grow border-0 input input-ghost w-full"
							type="text"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};

export default CitySearch;
