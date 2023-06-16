import './index.css'

const LocationDetails = props => {
  const {locationData} = props
  const {imageUrl, name, description} = locationData

  return (
    <li className="list-container">
      <div className="location-card">
        <img src={imageUrl} alt={name} className="img" />
        <div className="location-info-container">
          <h1 className="location-head">{name}</h1>
          <p className="location-info">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default LocationDetails
