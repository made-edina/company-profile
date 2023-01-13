import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import WhoWeAre from './components/WhoWeAre';
import OurCoreValues from './components/OurCoreValues';
import OurSpeciality from './components/OurSpeciality';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Discover />
      <WhoWeAre />
      <OurCoreValues />
      <OurSpeciality />
      <Footer />
    </div>
  );
}

export default App;
