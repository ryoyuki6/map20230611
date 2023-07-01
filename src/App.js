import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import './App.css';

const containerStyle = {
  height: "100vh",
  width: "100%",
  // height: "500px"
};

const center = {
  lat: 35.681,
  lng: 139.781
}

const positionTokyoStation = {
  lat: 35.680959106959,
  lng: 139.76730676352
};

function App() {
  return (
    <>
      {/* <h2>React & Google Map !</h2> */}
      <div className='wrap'>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <MarkerF position={positionTokyoStation} label={"東京駅です"} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}

export default App;
