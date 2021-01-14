import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { getGeocode } from '../../apiCalls'

const containerStyle = {
  width: '400px',
  height: '400px'
}

const DistributionMap = ({ distributions }) => {
  const [map, setMap] = useState(null)
  // const [center, setCenter] = useState({lat: 41.2284, lng: 80.9098}) 
  const [locationData, setLocationData] = useState([])
  
  // useEffect(() => {
  //   if (locationData.length === 0) {
  //     const locations = distributions.native.map(location => {
  //       getGeocode(location)
  //       .then(data => {
  //         console.log(data)
  //         setLocationData(data.results.geometry.location)
  //       })
  //       .catch(error => console.log(error))
  //     })
  //   }
  // }, [locationData])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBP9sSftzj-CWc5-ignMPWhd9JRTW5r_Js'
  })

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback((map) => {
    setMap(null)
  }, [])

  const createMarkers = () => {
    console.log(distributions)
    // const markers = distributions.native.map(place => {
    // getGeocode(place)
    // .then(data => {
    //   setLocationData(data.items)
    //   return <Marker key={place} position={{ lat: locationData.position.lat, lng: locationData.position.lng}} />
    // })
}

  return isLoaded && (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { createMarkers() }
    </GoogleMap>
  )
}


export default DistributionMap