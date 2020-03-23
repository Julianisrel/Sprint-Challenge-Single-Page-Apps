import React from "react";
import Header from "./components/Header.js";
import { Route, Switch, withRouter } from "react-router-dom"
import CharacterList  from './components/CharacterList';
const App = () => {
  
  
  return (
  
<main data-testid='app'>
  <Header />
    <Switch>
      <Route path='/character' component= {CharacterList} />



   </Switch>



    </main>
  );
}
export default withRouter(App)