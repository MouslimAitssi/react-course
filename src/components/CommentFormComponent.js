import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';


export default class CommentForm extends Component {

    render() {

        return (
                <Modal isOpen={this.props.isOpen} toggle = {this.props.toggle}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            
                            <Button type="submit" value="submit" color="primary">Submit</Button>  
                        </Form>
                    </ModalBody>
                </Modal>
        );
    }
}