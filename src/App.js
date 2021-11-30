import logo from './logo.svg';
import './App.css';

import Intro from './Components/Topbar/Intro/Intro';
import Topbar from './Components/Topbar/Topbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Background from './Components/Background/Background'



function App() {
  return (
    <div className="App">
      
        
          <Topbar></Topbar>
     
     <div className="section">
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Work></Work>
      <Background></Background>
      <Contact></Contact>
      <Footer></Footer>
      
      
       
      </div>
    
    </div>
  );
}

export default App;
