import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";


export default class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        const dish = this.props.SelectedDish;
        const Comments=this.props.SelectedDish.comments.map((Comment) => {
            return (
                <div><p>{Comment.comment}</p>-- <p>{Comment.author}, {Comment.date}</p></div>
            );
        
        });
        return(
            <div className="row">
                <div className="col-12 col-md-5">
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
                <div className="col-12 col-md-5">
                    <Card>
                        <CardTitle><h4>Comments</h4></CardTitle>
                        <CardBody>
                            {Comments}
                        </CardBody>
                    </Card>
                </div> 
            </div>
        );
    }
}