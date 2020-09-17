import React from 'react';
import List from './views/List';
import Create from './views/Create';
import Update from './views/Update';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Favorite Authors</h1>
      <Router>
        <List path="/"/>
        <Create path="/new"/>
        <Update path="edit/:id"/>
      </Router>

    </div>
  );
}

export default App;
