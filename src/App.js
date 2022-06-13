import logo from "./logo.svg";
import "./App.css";

function App() {
  if (navigator.geolocation) {
  } else {
    console.log("The service is not applicable for the device");
  }
  return <div></div>;
}

export default App;
