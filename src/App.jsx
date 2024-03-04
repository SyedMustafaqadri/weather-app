import "./App.css";
import WeatherDashboard from "./Components/WeatherDashboard";
import WeatherDisplay from "./Components/WeatherDisplay";

function App() {
	return (
		<div className="bg-slate-200 appDisplay">
      <WeatherDisplay />
      <WeatherDashboard />
		</div>
	);
}

export default App;
