import React, { useEffect } from "react";
import { useSelector, useForm } from "react-redux";
import { Toast, Container, Card, Button } from 'react-bootstrap';
function Billing() {
    const state = useSelector((state) => state);

    console.log(state);
    let totalSum = state.has_loged.requests.map(item => item.quantity).reduce((acc, curr) => acc + curr, 0) * 0.75;

    return (
        <Container fluid>
            <Card className="text-center">
                <Card.Header>Account Balance</Card.Header>
                <Card.Body>
                    <Card.Title>You have in your account</Card.Title>
                    <Card.Text>
                        {totalSum} LE
                    </Card.Text>

                </Card.Body>

            </Card>
        </Container>

    );

}

export default Billing;