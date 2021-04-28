import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="social-media">
                    <h3>Join us on social media!</h3>
                    <a href="https://www.facebook.com/Callahan-Lovecchio-Law-Office-110096517158617/">Facebook</a>
                </div>
                <div className="legalese">
                    <h3>&#169; Callahan Lovecchio Law</h3>
                    <p>The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
                    <a href="#top">Return to top</a>
                </div>
                <div className="contact-me">
                    <h3>Developed by <a href="https://www.trentungard.com">Trent Ungard</a></h3>
                </div>
            </div>
        </footer>
    )
}
