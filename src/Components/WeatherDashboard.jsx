const WeatherDashboard = () => {
	return (
		<div className="pt-4 px-10 pb-4 flex flex-col xl:w-3/4 lg:w-3/4 h-full">
			<div className="h-[10%] flex gap-10 items-center">
				<p className="text-2xl font-medium">Today</p>
				<p className="text-xl font-medium">Tomorrow</p>
			</div>
			<div className="cardGrid text-indigo-100">
				<div className="infoCard">
					<h1 className="text-lg font-medium">Wind</h1>
					<h1 className="text-xl font-semibold">6 km/h</h1>
					<h1 className="text-lg font-medium">East</h1>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">Humadity</h1>
					<h1 className="text-xl font-semibold">69%</h1>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">Real Feel</h1>
					<h1 className="text-xl font-semibold">31&deg;C</h1>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">UV Index</h1>
					<h1 className="text-xl font-semibold">3</h1>
					<h1 className="text-lg font-medium">Moderate</h1>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">Pressure</h1>
					<h1 className="text-xl font-semibold">1000 mb</h1>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">Change of rain</h1>
					<h1 className="text-xl font-semibold">70%</h1>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">Temperature</h1>
					<h1 className="text-xl font-semibold">31&deg;C</h1>
					<h1 className="text-xl font-semibold">31&deg;C</h1>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">Sun</h1>
					<div className="flex gap-10">
						<h1 className="text-lg">Rise</h1>
						<h1 className="text-lg font-medium">5:17 am</h1>
					</div>
					<div className="flex gap-10">
						<h1 className="text-lg">Rise</h1>
						<h1 className="text-lg font-medium">5:17 am</h1>
					</div>
				</div>
				<div className="infoCard">
					<h1 className="text-lg font-medium">Moon</h1>
					<div className="flex gap-10">
						<h1 className="text-lg">Rise</h1>
						<h1 className="text-lg font-medium">5:17 am</h1>
					</div>
					<div className="flex gap-10">
						<h1 className="text-lg">Rise</h1>
						<h1 className="text-lg font-medium">5:17 am</h1>
					</div>
				</div>
			</div>
			<p className="h-[10%] flex items-center text-sm">
				All Data Powered by Open Weather
			</p>
		</div>
	);
};

export default WeatherDashboard;
