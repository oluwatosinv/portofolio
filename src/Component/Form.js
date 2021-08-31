import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const Example = (props) => {
    return (
        <Container>
            <h1 className="project-title">Contact ME</h1>
            <p><i class="fas fa-phone"></i><a class="contacts__list" href="tel:+2347034582558"> +2347034582558</a></p>
            <p><i class="fas fa-envelope-square"></i><a class="contacts__list" href="mailto:faboadeoluwatosin@gmail.com">
                faboadeoluwatosin@gmail.com</a></p>
            <Form>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="text" name="Name" id="name" placeholder="Full Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>


                <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <Button>Submit</Button>
            </Form>
        </Container>
    );
}

export default Example;