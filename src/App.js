import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar}  from "./component/Navbar";
import { Banner } from './component/Banner';
import Feacture from './component/Feature';
import { Projects } from './component/Projects';
import {Contact}  from './component/Contact';
import {Footer}  from './component/Footer';






function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Feacture/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

