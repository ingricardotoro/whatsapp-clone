import React, { useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login'
import './css/App.css';
import { useStateValue } from './components/StateProvider';


function App() {

  //const [user, setUser] = useState(null)

  const [{user}, dispatch]= useStateValue();

  return (
    <div className="app">
    
          {
            !user ? (
              <Login />
            ) :(  
            <div className= "app__body">
              <Router>
              <Sidebar />
                <Switch>
                
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                 <h1 >Desarrollador por: Ing. Marvin Toro</h1>
                </Route>
                </Switch>
              </Router> 
            </div>
            )
          }
    
    </div>
  );
}

export default App;
