// import React from "react";
// // import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
// import { Loader } from "@googlemaps/js-api-loader"

// const mapContainerStyle = {
//   width: "35%",
//   height: "80vh",
//   borderRadius: "20px",
// };

// const center = {
//   lat: 23.918936,
//   lng: 80.183417,
// };

// const mapOptions = {
//   streetViewControl: false,
//   zoomControl: false,
//   fullscreenControl: false,
//   mapTypeControl: false,
//   keyboardShortcuts: false,
// };

// const MapContainer = () => {
//   const { isLoaded, isError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     // libraries: ["places"],
//   });

//   if (isError) {
//     return <h1>Error occurred</h1>;
//   }

//   if (!isLoaded) {
//     return <h1>Loading....</h1>;
//   }
//   return (
//     <div>
//       <div className="map-container">
//         <GoogleMap
//           // mapContainerStyle={mapContainerStyle}
//           zoom={4.8}
//           center={center}
//           options={mapOptions}
//         >
//           {/* <MarkerF position={mumbai} /> */}
//           {/* <MarkerF position={{ lat: ct[2].latitude, lng: ct[2].longitude }} /> */}
//           {/* <Mark /> */}
//         </GoogleMap>
//       </div>
//     </div>
//   );
// };

// export default MapContainer;