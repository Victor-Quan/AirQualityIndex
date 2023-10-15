

function getCardColor(aqi) {
    switch (true) {
        case (aqi <= 50):
            return 'bg-success text-white';
        case (aqi <= 100):
            return 'bg-warning';
        case (aqi <= 150):
            return 'bg-orange';
        case (aqi <= 200):
            return 'bg-danger text-white';
        case (aqi <= 300):
            return 'bg-very-unhealthy text-white';
        default:
            return 'bg-hazardous';
    }
}

function AirQualityCard({data}) {
    const {aqi, city, dominentpol, time} = data;
    const cardColor = getCardColor(aqi);
    return (
        <div className={`card mb-4 ${cardColor}`}>
            <div className="card-body">
                <h5 className="card-title">{city.name}</h5>
                <h6 className="card-subtitle mb-2">Air Quality Index: {aqi}</h6>
                <p className="card-text">Dominant Pollutant: {dominentpol}</p>
                <p className="card-text">Last Updated: {time.s}</p>
            </div>
        </div>
    )
}

export default AirQualityCard