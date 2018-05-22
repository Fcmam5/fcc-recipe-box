import React, { Component } from 'react';
import {PanelGroup, Panel, Button, Row, Col, FormControl, ControlLabel} from 'react-bootstrap';
import { observer } from 'mobx-react';
import RecipeItem from './RecipeItem';

@observer
class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      newRecipe: {
        name: '',
        ingredients: ''
      }
    }
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  addNewRecipe() {
    this.props.store.addRecipe(this.state.newRecipe);
    localStorage.setItem('_Fcmam5_recipes', JSON.stringify(this.props.store.recipies)); // TODO: Move to a separated function
    this.setState({
      newRecipe: {
        name: '',
        ingredients: ''
      }
    });
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

  componentDidMount() {
    let items = localStorage.getItem('_Fcmam5_recipes');
    if (items) {
      let storedRecipies = JSON.parse(items) || [];
      storedRecipies.map(rcp => this.props.store.addRecipe(rcp));
    }

  }

  updateLocalStorage() {

  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={8}>
            <PanelGroup accordion className="">
              {this.props.store.recipies.map((rec) => {
                return <RecipeItem id="1" name={rec.name} ingredients={rec.ingredients}/>
              })}
            </PanelGroup>
          </Col>
          <Col sm={4} className="container">
            <Row>
              <Col sm={9}>
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

                <hr/>
                <Button bsStyle="primary"
                        onClick={ this.addNewRecipe }>
                        Add recipe
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RecipeList;
