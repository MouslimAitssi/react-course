import React, {Component} from 'react';
import { CardImg, CardImgOverlay, CardTitle, Card, CardBody, CardText } from 'reactstrap';
import DishDetail from './DishdetailComponent';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedDish:null
        }
    }

    onSelectedDish(dish) {
        this.setState({SelectedDish:dish});
    }

    renderDish(dish) {
        if(dish!=null) {
            return(
                <div className="col-12 col md-5 m-1">    
                    <DishDetail SelectedDish={this.state.SelectedDish}/>
                </div>
            );
        }
        else {
            return(<div></div>);
        }
    }

    render() {
        const menu=this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick= {() => this.onSelectedDish(dish)}> 
                        <CardImg width="100%" src= {dish.image} alt= {dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        
        });

        return (
            <div className="container" >
                <div className="row">
                    {menu}
                    {this.renderDish(this.state.SelectedDish)}
                </div>
            </div>
            
        );
    }
}
export default Menu;