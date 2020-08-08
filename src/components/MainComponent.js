import React, { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';



class Main extends Component {

  constructor(props) {
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish: null
    }
  }

  onSelectedDish(dishId) {
    this.setState({selectedDish:dishId});
  }

  renderDish(dish) {
    if(dish!=null) {
        return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        );
    }
    else {
      return(<div></div>);
    }
  }
  
  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick = {(dish) => this.onSelectedDish(dish)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;