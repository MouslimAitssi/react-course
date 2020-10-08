import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText , BreadcrumbItem, Breadcrumb, Button} from "reactstrap";
import {Link} from 'react-router-dom';

import CommentForm from './CommentFormComponent';

    class DishDetail extends Component {

        constructor(props) {
            super(props);

            this.state = {
                isNavOpen: false,
                isModalOpen: false
            }
            this.toggleNav = this.toggleNav.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            
        }

        toggleNav() {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            })
        }
    
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }


        handleSubmit(values) {
            this.toggleModal();
            this.props.addComment(this.props.dish.id, values.rating, values.author, values.comment);
            console.log("reached");
        }

        render() {
            if(this.props.dish !=null) {
                return(
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{this.props.dish.name}</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">
                            <RenderDish dish = {this.props.dish} />
                            <div className="col-12 col-md-5 m-1">
                                <Card>
                                    <CardTitle><h4>Comments</h4></CardTitle>
                                    <RenderComments comments={this.props.comments}
                                        addComment={this.props.addComment}
                                        dishId={this.props.dish.id} 
                                        isOpen={this.state.isModalOpen}
                                        toggle={this.toggleModal}
                                        handleSubmit={this.handleSubmit} />
                                    <div>
                                        <Button outline onClick={this.toggleModal}> <span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                );
            }
    
            else {
                return(
                    <div></div>
                );
            }
        }
    }

    function RenderDish({dish}) {
        return(
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
        )
    }

    function RenderComments({comments, addComment, dishId, isOpen, toggle, handleSubmit}) {
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        if (comments == null) {
            return (<div></div>);
        }

        else {
            return (

                
                <div>
                    
                    {comments.map((Comment) => {
                        return (         
                            <div class ="list-unstyled"><p>{Comment.comment}</p><p>--  {Comment.author}, {monthNames[new Date(Comment.date).getMonth()]} {("0"+(new Date(Comment.date).getDate() + 1).toString()).substring(("0"+(new Date(Comment.date).getDate() + 1).toString()).length-2,("0"+(new Date(Comment.date).getDate() + 1).toString()).length)}, {new Date(Comment.date).getFullYear()} </p></div>
                        );
                    })}
                    <CommentForm dishId={dishId} addComment={addComment} isOpen = {isOpen} toggle={toggle} handleSubmit={handleSubmit}/>

                </div>
            
            )
        };    
    }
    


export default DishDetail;