import logo from './logo.svg';
import './App.css';


import Topbar from './Components/Topbar/Topbar';

import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SeeMore from './Components/Work/SeeMore';





function App() {
  return (
    <div className="App">
      
        
          <Router>
          <Topbar></Topbar>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route  path="/home">
                <Home></Home>
            </Route>
            <Route  path="/about">
                <About></About>
            </Route>
            <Route  path="/seemore/:id">
                <SeeMore></SeeMore>
            </Route>

          </Switch>
          <Footer></Footer>
          </Router>
     
    
     
     
      
      
       
     
    
    </div>
  );
}

export default App;
