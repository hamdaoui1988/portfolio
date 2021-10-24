
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from './components/Navbar'
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Experiences from './components/Experiences'
import Myprojects from './components/Myprojects'
import Mailer from './components/Mailer'
function App() {
  return (
    <>
     <Particles className="particles-canvas"
                params={{
                    particles: {
                        number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                      }
                    }
                }} 
                />
    <Navbar />
    <Header />
    <Aboutme />
    <Services />
    <Experiences />
    <Myprojects />
    <Mailer />
    </>
  );
}

export default App;
