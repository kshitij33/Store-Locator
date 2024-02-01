import React from "react";
import "./places.css";

const Places = ({ onPlaceClick }) => {
  const places = [
    {
      id: 1,
      name: "Place A",
      lat: 19.0255,
      lng: 72.8777,
      details:
        "Details for Place A Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maxime incidunt error expedita tempora quasi voluptatum cupiditate voluptatem excepturi officiis.",
    },
    {
      id: 2,
      name: "Place B",
      lat: 19.0129,
      lng: 72.8232,
      details:
        "Details for Place B Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maxime incidunt error expedita tempora quasi voluptatum cupiditate voluptatem excepturi officiis.",
    },
    {
      id: 3,
      name: "Place C",
      lat: 20.5937,
      lng: 78.9629,
      details:
        "Details for Place C Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maxime incidunt error expedita tempora quasi voluptatum cupiditate voluptatem excepturi officiis.",
    },
    {
      id: 4,
      name: "Place D",
      lat: 22.5726,
      lng: 88.3639,
      details:
        "Details for Place D Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maxime incidunt error expedita tempora quasi voluptatum cupiditate voluptatem excepturi officiis.",
    },
    {
      id: 5,
      name: "Place E",
      lat: 25.2048,
      lng: 55.2708,
      details:
        "Details for Place E Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maxime incidunt error expedita tempora quasi voluptatum cupiditate voluptatem excepturi officiis.",
    },
    {
      id: 6,
      name: "Place F",
      lat: 26.9124,
      lng: 75.7873,
      details:
        "Details for Place F Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maxime incidunt error expedita tempora quasi voluptatum cupiditate voluptatem excepturi officiis.",
    },
    // Add more places as needed
  ];

  const handlePlaceClick = (place) => {
    onPlaceClick(place);
  };

  return (
    <div className="places_container">
      <h2 className="heading bg-white">Places List</h2>
      <ul>
        <div className="places_list">

        {places.map((place) => (
          <div className="place_container" key={place.id}>
            <li
              className="place bg-white hover:bg-cyan-300"
              onClick={() => handlePlaceClick(place)}
            >
              {place.name}
            </li>
          </div>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default Places;
