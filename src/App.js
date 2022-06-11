import NavBar from './Components/NavBar/NavBar';
import './App.css';
import About from './Components/About/About';
import Appointments from './Components/Appointments/Appointments';
import MapContainer from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <About />
      <Appointments />
      <MapContainer />
      <Footer />
    </div>
  );
}

export default App;
