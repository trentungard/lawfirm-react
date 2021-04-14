import axios from 'axios';

const url = process.env.REACT_APP_PRODUCTION_URL || 'http://localhost:3001';

export const sendEmail = (firstName, lastName, email, phoneNumber, message) => {
    const obj = {
        firstName,
        lastName,
        email,
        phoneNumber,
        message
    }

    return axios.post(`${url}/submit-message`, obj)
        .then(() => alert('Message submitted successfully. We will get back to you as soon as possible!'))
        .catch((e) => {
            console.error(e);
            alert('error submitting message. Please try again momentarily')
        })
}