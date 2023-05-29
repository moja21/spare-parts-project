
import { useState } from "react";
import Navbar from './navbar';
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from "./CreatOrder";
import OngoingOrders from "./OngoingOrders";
function App() {
 // const [buttonPopup, setbuttonPopup] = useState(false);
 
  return (
    <Router>
    <div className="App">
     <Navbar />
       <div className="content">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/Ongoing">
          <OngoingOrders />
        </Route>
        
        </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
