import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import './App.css';

const container = {
  width: "75%",
  height: "500px"
};

const position = {
  lat: 35.680959106959,
  lng: 139.76730676352
};

function App() {
  return (
    <>
      <h2>React & Google Map</h2>
      <div className='wrap'>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
          <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
            <MarkerF position={position} label={"東京駅です"} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}

export default App;
