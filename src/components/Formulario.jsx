import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Formulario(props) {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" placeholder="Name" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword">Race</Label>
                        <Input type="text" name="race"  placeholder="Race" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Age</Label>
                        <Input type="text" name="age" placeholder="Age" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword">Weapon</Label>
                        <Input type="text" name="weapon" id="examplePassword" placeholder="Weapon" />
                    </FormGroup>
                </Col>
            </Row>
           
            <Button >Agregar</Button>
        </Form>

    );
}

export default Formulario;