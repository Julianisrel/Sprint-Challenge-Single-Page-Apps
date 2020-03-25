import React from "react";
import Header from "./components/Header.js";
import { Route, Switch, withRouter } from "react-router-dom"
import CharacterList  from './components/CharacterList';
import LocationsList from "./components/LocationsList";
import LocationCard from "./components/LocationCard.js";



const App = () => {
  
  
  return (
  
<main data-testid='app'>
  <Header />
    <Switch>
      <Route path='/character' component= {CharacterList} />
      <Route path='/location'  component= {LocationsList} />
  </Switch>
</main>
  );
}

export default withRouter(App)