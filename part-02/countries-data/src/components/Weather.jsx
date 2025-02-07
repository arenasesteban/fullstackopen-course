import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        const fetchWeather = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            setWeather(response.data);
        };

        fetchWeather();
    }, [country]);

    return (
        <div>
            <h2>Weather in {country.name.common}</h2>
            {weather ? (
                <div>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    <p>Wind: {weather.wind.speed} m/s</p>
                </div>
            ) : (
                   <p>Loading weather data...</p> 
            )}
        </div>
    );
}

export default Weather;