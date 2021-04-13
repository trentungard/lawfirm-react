import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ContactForm.scss';

export default function ContactForm() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [message, setMessage] = useState();

    const updateFirstName = (e) => setFirstName(e.target.value);
    const updateLastName = (e) => setLastName(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePhonenumber = (e) => setPhoneNumber(e.target.value);
    const updateMessage = (e) => setMessage(e.target.value);

    return (
        <Form className="form-container">
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={(e) => updateFirstName(e)} type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={(e) => updateLastName(e)} type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e) => updateEmail(e)} type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={(e) => updatePhonenumber(e)} type="phone" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control onChange={(e) => updateMessage(e)} as="textarea" rows={4} placeholder="Message" />
            </Form.Group>
            <Button onClick={() => alert(message)}>See Ref</Button>
        </Form>
    )
}