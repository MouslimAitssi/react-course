import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText , BreadcrumbItem, Breadcrumb, Button} from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components'; 

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
            this.props.postComment(this.props.dish.id, values.rating, values.author, values.comment);
            
        }

        render() {
            if (this.props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (this.props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{this.props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if (this.props.dish != null)
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
                                        postComment={this.props.postComment}
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
                <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)'}}>
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        )
    }

    function RenderComments({comments, postComment, dishId, isOpen, toggle, handleSubmit}) {

        if (comments == null) {
            return (<div></div>);
        }

        else {
            return (

                <div>
                    <Stagger in>
                        {comments.map((Comment) => {
                            return (         
                                <Fade in>
                                <li key={Comment.id}>
                                    <p>{Comment.comment}</p>
                                    <p>-- {Comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(Comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        <CommentForm dishId={dishId} postComment={postComment} isOpen = {isOpen} toggle={toggle} handleSubmit={handleSubmit}/>
                    </Stagger>
                </div>
            
            )
        };    
    }

export default DishDetail;