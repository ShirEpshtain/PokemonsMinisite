// App.js or index.js (or the entry point of your application)
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetails from './components/pokemonDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/pokemon-details/:id" component={PokemonDetails} /> */}
      </Switch>
    </Router>
  );
};

export default App;
