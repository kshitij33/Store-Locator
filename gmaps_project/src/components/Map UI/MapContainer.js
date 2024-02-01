import React, { useEffect } from "react";
import { useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Places from "../location UI/Places";
import './MapContainer.css'

const MapContainer = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const mapContainerStyle = {
    width: "66vh",
    height: "80vh",
    borderRadius: "20px",
    // marginRight : "10px"
    marginTop: "10px",
  };

  const myLatLng = { lat: 19.0203, lng: 72.8457 };

  const mapOptions = {
    streetViewControl: false,
    // zoomControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    keyboardShortcuts: false,
  };

  const handlePlaceClick = (place) => {
    console.log(place.details);
    setSelectedPlace(place);
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 23.918936, lng: 80.183417 },
        zoom: 4.6,
        ...mapOptions,
      });

      // new window.google.maps.Marker({
      //   position: myLatLng,
      //   map,
      //   title: "Hello World!",
      // });

      if (selectedPlace) {
        new window.google.maps.Marker({
          position: { lat: selectedPlace.lat, lng: selectedPlace.lng },
          map: map,
          title: selectedPlace.name,
        });


      }

      
    });
  }, [selectedPlace]); 

  return (
    <div className="container">
      <Places onPlaceClick={handlePlaceClick} />
      <div id="map" style={mapContainerStyle}></div>
    </div>
  )
};

export default MapContainer;
