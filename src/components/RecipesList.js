import React, { Component } from 'react';
import {PanelGroup, Panel, Button} from 'react-bootstrap';

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipies: [],
    }
  }

  addNewRecipe(recipeObject) {
    let updatedRecipeArray = this.state.recipies;
    updatedRecipeArray.push(recipeObject);

    this.setState({
      recipies: updatedRecipeArray,
    });
  }

  render() {
    return (
      <div className="container">
        <PanelGroup accordion className="container">
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle>Panel heading 1</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>Panel content 1</Panel.Body>
          </Panel>
        </PanelGroup>
        <Button bsStyle="primary" onClick={addNewRecipe}>Add recipe</Button>
      </div>
    );
  }
}

export default RecipeList;
