import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";


export default class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(Comments) {
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        if (Comments == null) {
            return (<div></div>);
        }

        else {
            return (Comments.map((Comment) => {
                
                return (
                    <div class ="list-unstyled"><p>{Comment.comment}</p><p>--  {Comment.author}, {monthNames[new Date(Comment.date).getMonth()]} {("0"+(new Date(Comment.date).getDate() + 1).toString()).substring(("0"+(new Date(Comment.date).getDate() + 1).toString()).length-2,("0"+(new Date(Comment.date).getDate() + 1).toString()).length)}, {new Date(Comment.date).getFullYear()} </p></div>
                );
            }));    
        }
    }

    render(){
        const dish = this.props.SelectedDish;
        
        return(
            <div className="row">
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
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardTitle><h4>Comments</h4></CardTitle>
                        {this.renderComments(this.props.SelectedDish.comments)}
                    </Card>
                </div> 
            </div>
        );
    }
}