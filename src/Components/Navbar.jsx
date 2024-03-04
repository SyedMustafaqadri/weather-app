import CitySearch from "./CitySearch";

const Navbar = () => {
	return (
		<>
			<div className="navbar bg-gradient-to-b from-slate-900 to-slate-800">
				<div className="flex-1 mx-3">
					<img
						src="/src/assets/Open-Weather-logo.png"
						alt="Open Weather"
						className="h-10"
					/>
				</div>
				<div className="flex-none gap-4">
					<CitySearch />
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
