import { useEffect, useState } from "react";
import axios from "axios";

const WeatherDisplay = () => {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const apiKey = import.meta.env.VITE_REACT_OPEN_WEATHER_SECRET_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=matric`;

  const searchLocation = (event) => {
		if (event.key === "Enter") {
			axios.get(url).then((response) => {
				setData(response.data);
				console.log("Weather data:", response.data); // This line should be removed in production
			});
      setLocation("");
		}
	};





	const [currentDate, setCurrentDate] = useState(new Date());
	const [currentTime, setCurrentTime] = useState(new Date());
	const formatDate = (date) => {
		const options = { month: "long", day: "numeric", year: "numeric" };
		return new Intl.DateTimeFormat("en-US", options).format(date);
  };
	const formatTime = (date) => {
		const options = {
			weekday: "long",
			hour: "numeric",
			minute: "2-digit",
			hour12: true,
		};
		return new Intl.DateTimeFormat("en-US", options).format(date);
	};
  useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDate(new Date());
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="weatherDisplay">
			{/* Search */}
			<label className="input input-bordered flex items-center gap-2 bg-slate-100 h-10 w-full">
				<input
					type="text"
					className="grow border-0 input input-ghost h-10"
          placeholder="Search For City"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDownCapture={searchLocation}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="w-4 h-4 opacity-90 text-indigo-600 "
				>
					<path
						fillRule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clipRule="evenodd"
					/>
				</svg>
			</label>
			{/* Display Weather Situation with img uning api */}
			<img
				src="./src/assets/CloudyDay.png"
				alt="Cloud"
				className="mt-7 mb-4 h-1/4 md:mt-16"
			/>
			{/* display temp in calcius */}
			<div className="text-center border-b-2 border-gray-300 h-1/4 w-2/3">
				<p className="font-semibold text-8xl">
					31<span>&deg;</span>C
				</p>
				<p className="font-medium">Mostly Cloudy</p>
			</div>
			{/* Date and day */}
			<div className="py-8 text-center">
				<p className="text-lg font-medium">{formatDate(currentDate)}</p>
				<p className="text-2xl font-normal">{formatTime(currentTime)}</p>
			</div>
			<p className="font-bold text-5xl">Karachi</p>
		</div>
	);
};

export default WeatherDisplay;
