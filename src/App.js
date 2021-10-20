import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./componentes/Navbar/Navbar";
import Main from "./componentes/Main/Main";
import Footer from './componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import DetailPage from './componentes/Main/DetailPage';


function App() {
  return (
    <Router>

      <Navbar/>

      <Switch>

        <Route exact path="/productos">
          <ItemListContainer/>        
        </Route>

        <Route exact path="/productos/:nombre">
          <DetailPage/>
        </Route>

        <Route path="/">
            <Main/>
          </Route>

      </Switch>

      <Footer/>

    </Router>
  );
}

export default App;
