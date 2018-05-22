import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import RecipeList from './components/RecipesList';
import store from './RecipiesStore';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Panel>
          <Panel.Body>
            <RecipeList store={store}/>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default App;
