import { Form, Buttom } from 'react-bootstrap';
import './ContactForm.scss';

export default function ContactForm() {
    return (
        <Form className="form-container">
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Message" />
            </Form.Group>
        </Form>
    )
}