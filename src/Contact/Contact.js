import './Contact.scss';
import OfficeMap from '../Map/Map';
import ContactForm from '../Forms/ContactForm';
import emailjs from 'emailjs-com';

export default function Contact() {

    const sendEmail = async ( e ) => {
        e.preventDefault();

        await emailjs.sendForm('service_oqejgjf', 'template_6yamx5v', e.target, 'user_sBlh7feJ2AI8wbcDyZUlD')
            .then((res) => console.log(res))
            .catch((e) => console.error(e, 'error'))
        return 
    }

    return (
        <div className="contact-container">
            <h2 className="title">Contact Us</h2>
            <div className="contact-info container">
                <div className="contact-item">
                    <h4>Email:</h4>
                    <a href="mailto:bradistopper@icloud.com?subject=Contact From Website">bradistopper@icloud.com</a>
                </div>
                <div className="contact-item">
                    <h4>Phone:</h4>
                    <a href="tel: 5703233772">(570) 323-3772</a>
                    <h4>Fax:</h4>
                    <p>(570) 323-8647</p>
                </div>
                <div className="contact-item">
                    <h4>Address:</h4>
                    <address>
                    Callahan Lovecchio Law <br />
                    520 W 4th Street Suite 1A <br />
                    Williamsport, Pennsylvania 17701
                    </address>
                </div>
            </div>
            <div className="container">
                <OfficeMap />
            </div>
            {/* <div className="contact-form container">
                <ContactForm 
                    sendEmail={sendEmail}
                />
            </div> */}
        </div>
    )
}
