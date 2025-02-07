import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import "./Weather.css";

const Weather = ({ city }) => {
    const [dataR, setDataR] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=64db538f38d246a0a06231309250602&q=${city}`);
            const data = await res.json();
            if (data.error) {
                setError(data.error.message);
                alert("Failed to fetch weather data");
                setLoading(false);
                setDataR(null);
            } else {
                setDataR(data);
                setError(null);
                setLoading(false);
            }
            
        } catch (e) {
            console.error("Error fetching data: ",e);
            
        }
    }

    useEffect(() => {
        if (city) {
            fetchData();
        }
    }, [city])

    return (
        <div>
            {loading && <p>Loading data...</p>}
            {!loading && dataR && !error && (<div className="weather-cards">
                <WeatherCard info={`${dataR.current.temp_c}*C`} type={"Temperature"} />
                <WeatherCard info={`${dataR.current.humidity}%`} type={"Humidity"} />
                <WeatherCard info={dataR.current.condition.text} type={"Condition"} />
                <WeatherCard info={`${dataR.current.wind_kph} kph`} type={"Wind Speed"} />
            </div>)}

        </div>
    )
}

export default Weather