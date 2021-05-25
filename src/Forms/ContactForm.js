import { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import {sendEmail} from '../Helpers/sendEmail';
import './ContactForm.scss';

export default function ContactForm() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [message, setMessage] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const updateFirstName = (e) => setFirstName(e.target.value);
    const updateLastName = (e) => setLastName(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePhonenumber = (e) => setPhoneNumber(e.target.value);
    const updateMessage = (e) => setMessage(e.target.value);

    const emailRe = new RegExp('@');

    const updateAlertMessage = (message) => {
        setShowAlert(true);
        setAlertMessage(message);
        setTimeout(() => {
            setShowAlert(false);
            setAlertMessage('')
        }, 8000)
    }

    const submitForm = async () => {
        setIsLoading(true)
        if(!firstName || !lastName || !email || !message){
            updateAlertMessage('Please fill out all required fields.');
            setIsLoading(false);
        } else if(!emailRe.test(email)){
            updateAlertMessage('Please provide a valid email address.');
            setIsLoading(false);
        } else {
            await sendEmail(firstName, lastName, email, phoneNumber, message)
                .then(() => {
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPhoneNumber('');
                    setMessage('');
                });
            setIsLoading(false); 
        }
    }


    return (
        <Form className="form-container">
            <Alert hidden={!showAlert} variant="danger">{ alertMessage }</Alert>
            <Form.Group>
                <Form.Label>First Name<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control value={firstName} onChange={(e) => updateFirstName(e)} type="text" name="first-name" placeholder="First Name (required)" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control value={lastName} onChange={(e) => updateLastName(e)} type="text" name="last-name" placeholder="Last Name (required)" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control value={email} onChange={(e) => updateEmail(e)} type="email" name="email" placeholder="Email Address (required)" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control value={phoneNumber} onChange={(e) => updatePhonenumber(e)} type="tel" name="number" placeholder="Phone Number"  pattern="[0-9]" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Message<span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control value={message} onChange={(e) => updateMessage(e)} as="textarea" name="message" rows={4} placeholder="Message (required)" />
            </Form.Group>
            <Button onClick={submitForm}>
            <span>Submit</span>
            <Spinner  
                animation="border"
                as="span"
                role="status"
                size="sm"
                style={
                    isLoading ? {display: 'inline-block', margin: '0 5px'} : {display: 'none', margin: '0 5px'}
                }
            /></Button>
        </Form>
    )
}