import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import RecipeList from './components/RecipesList';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Panel>
          <Panel.Body>
            <RecipeList/>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default App;
