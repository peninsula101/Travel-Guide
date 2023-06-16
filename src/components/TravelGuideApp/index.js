import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import LocationDetails from '../LocationDetails'

class TravelGuideApp extends Component {
  state = {
    locationsList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.apiUrlPackages()
  }

  apiUrlPackages = async () => {
    this.setState({
      isLoading: true,
    })

    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))

      this.setState({
        locationsList: updatedData,
        isLoading: false,
      })
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderLocationsList = () => {
    const {locationsList} = this.state

    return (
      <ul className="unordered-list">
        {locationsList.map(eachLocation => (
          <LocationDetails locationData={eachLocation} key={eachLocation.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <h1 className="travel-head">Travel Guide</h1>
        <hr className="underline" />
        <div className="location-bg-container">
          {isLoading ? this.renderLoader() : this.renderLocationsList()}
        </div>
      </div>
    )
  }
}

export default TravelGuideApp
