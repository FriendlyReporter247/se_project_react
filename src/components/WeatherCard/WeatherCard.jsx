import "./WeatherCard.css";
import sunny from "../../assets/SUNNY.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temperature">{weatherData.temp.F}°F</p>
      <img src={sunny} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
