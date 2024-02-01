import "./App.css";
import Content from "./components/Content";
import MapContainer from "./components/Map UI/MapContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
    <div className="navbar">
      <Navbar />
    </div>

      <div className="App bg-indigo-600 text-white h-screen   mt-20 justify-between">
        <div className=" map-container flex justify-end mr-24 mt-6" >
          <MapContainer />
          {/* <Content /> */}
        </div>
          <br />
      </div>
    </>
  );
}

export default App;
