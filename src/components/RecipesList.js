import React, { Component } from 'react';
import {PanelGroup, Panel, Button, Row, Col, FormControl, ControlLabel} from 'react-bootstrap';
import { observer } from 'mobx-react';
import RecipeItem from './RecipeItem';
import EditionModal from './EditionModal';

@observer
class RecipeList extends Component {

  handleShow = () => {
    this.props.store.showModal = true;
  }

  componentDidMount() {
    let items = localStorage.getItem('_Fcmam5_recipes');
    if (items) {
      let storedRecipies = JSON.parse(items) || [];
      storedRecipies.map(rcp => this.props.store.addRecipe(rcp));
    }

  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={10}>
            <PanelGroup accordion>
              {this.props.store.recipies.map((rec, index) => {
                return <RecipeItem id={ index }
                                   name={ rec.name }
                                   ingredients={ rec.ingredients }
                                   store={this.props.store}/>
              })}
            </PanelGroup>
          </Col>
        </Row>
        <Button bsStyle="primary"
                onClick={ this.handleShow}>
                Add New
              </Button>
      <EditionModal showModal={this.props.store.showModal}
                    store={this.props.store}/>
      </div>
    );
  }
}

export default RecipeList;
