import "./Weather.css";

const WeatherCard = ({info,type}) =>{
    return (
        <div className="weather-card">
            <h4>{type}</h4>
            <p>{info}</p>
        </div>
    )
}

export default WeatherCard;