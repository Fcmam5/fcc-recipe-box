import React, { Component} from 'react';
import {observer} from 'mobx-react';
import {Modal, Button, FormControl, ControlLabel} from 'react-bootstrap';

@observer
class EditionModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      newRecipe: {
        name: '',
        ingredients:''
      },
    }
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  addNewRecipe() {
    this.props.store.addRecipe(this.state.newRecipe);
    this.updateLocalStorage();
    this.setState({
      newRecipe: {
        name: '',
        ingredients: ''
      }
    });
    this.props.store.CloseModal();
  }

  updateName(event) {
    this.setState({
      newRecipe: {
        name: event.target.value,
        ingredients: this.state.newRecipe.ingredients
      }
    })
  }

  updateIngredients(event) {
    this.setState({
      newRecipe: {
        name: this.state.newRecipe.name,
        ingredients: event.target.value
      }
    })
  }

  updateLocalStorage = () => {
    localStorage.setItem('_Fcmam5_recipes', JSON.stringify(this.props.store.recipies));
  }

  handleClose = () => {
    this.props.store.CloseModal();
  }
  render() {
    return (
      <div className="static-modal">
        <Modal show={ this.props.store.showModal }>
          <Modal.Header closeButton>
            <Modal.Title>Edit: {this.props.name} </Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <p>Add a new recipie</p>
              <ControlLabel>Recipie name</ControlLabel>
              <FormControl placeholder="Recipie name"
                           onChange={ this.updateName }
                           value={this.state.newRecipe.name }/>

              <ControlLabel>
                Ingredients
                  <small>(seperated by <code>;</code>)</small>
                </ControlLabel>
              <FormControl componentClass="textarea"
                           placeholder="ingredients seperated by ;"
                           onChange={ this.updateIngredients }
                           value={ this.state.newRecipe.ingredients }/>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose }>Close</Button>
            <Button bsStyle="primary" onClick={ this.addNewRecipe }>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditionModal;
