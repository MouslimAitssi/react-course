import React, {Component} from 'react';
import { CardImg, CardImgOverlay, CardTitle, Card, CardBody, CardText } from 'reactstrap';


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
                <Card>
                    <CardImg width="100%" src= {dish.image} alt= {dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
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
                </div>
                <div className="row">
                    {this.renderDish(this.state.SelectedDish)}
                </div>
            </div>
            
        );
    }

}
export default Menu;