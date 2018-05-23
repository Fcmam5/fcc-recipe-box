import React, { Component} from 'react';
import {observer} from 'mobx-react';
import {Modal, Button, FormControl, ControlLabel} from 'react-bootstrap';

@observer
class EditionModal extends Component {
  constructor(props){
    super(props);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  saveRecipe() {
    if (this.props.store.tempId === -1) {
    this.props.store.addRecipe({
      name: this.props.store.tempName,
      ingredients: this.props.store.tempIngredients
    });
  } else {
    this.props.store.updateRecipe(this.props.store.tempId);
  }
    this.updateLocalStorage();
    this.props.store.tempName = '';
    this.props.store.tempIngredients = '';
    this.props.store.tempId = -1;
    this.props.store.CloseModal();
  }

  updateName(event) {
    this.props.store.tempName = event.target.value;
  }

  updateIngredients(event) {
    this.props.store.tempIngredients = event.target.value;
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
                           value={this.props.store.tempName }/>

              <ControlLabel>
                Ingredients
                  <small>(seperated by <code>;</code>)</small>
                </ControlLabel>
              <FormControl componentClass="textarea"
                           placeholder="ingredients seperated by ;"
                           onChange={ this.updateIngredients }
                           value={ this.props.store.tempIngredients }/>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose }>Close</Button>
            <Button bsStyle="primary" onClick={ this.saveRecipe }>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditionModal;
