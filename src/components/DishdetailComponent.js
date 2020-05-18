import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";


export default class DishDetail extends Component {

    constructor(props) {
        super(props);
        
    }

    render(){
        const dish = this.props.SelectedDish;
        return(
            <div className="container" >
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src= {dish.image} alt= {dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );

    }
}