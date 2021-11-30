import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Intro from './Components/Topbar/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Work from './Components/Work/Work';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
         <Topbar></Topbar>
      <div className="section">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Work></Work>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
