import React, { Component } from 'react';
import {PanelGroup, Panel, Button} from 'react-bootstrap';
import { observer } from 'mobx-react';

@observer
class RecipeItem extends Component{
  handleDeleteButton = () => {
    this.props.store.deleteRecipe(this.props.id);
    this.props.localStorageUpdate();
  }

  handleEditButton = () => {

    this.props.store.openModal();
  }

  render() {
    return (
      <Panel eventKey={this.props.id}>
        <Panel.Heading>
          <Panel.Title toggle>{this.props.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <ul>
            { this.props.ingredients.split(';').map(ing => {
                return <li>{ing}</li>
              })
            }
          </ul>
          <Panel.Footer>
            <Button bsStyle="danger" onClick={ this.handleDeleteButton }>Delete</Button>
            <Button bsStyle="warning" onClick={ this.handleEditButton }>Edit</Button>
          </Panel.Footer>
        </Panel.Body>
      </Panel>
    );
  }
}

export default RecipeItem;
