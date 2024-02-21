import React from 'react';

function Footer () {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <img src="images/logo-footer.png" alt="Logo" width="75"/>
                    </div>
                    <div className='footer-col'>
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservation">Reservation</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Contact Information</h4>
                        <ul>
                            <p>123 Main St, City</p>
                            <p>Email: info@example.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Follow Us</h4>
                        <div className="social-links">
  	 				        <a href="/"><i className="fab fa-facebook-f"></i></a>
  	 				        <a href="/"><i className="fab fa-twitter"></i></a>
  	 				        <a href="/"><i className="fab fa-instagram"></i></a>
  	 			        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='copyright'>
                <p>&copy; <span id="copyrightYear"></span> Little Lemon restaurant. All rights reserved.</p>
                <p> Developed by Shadi max </p>
            </div>
        </footer>
    );
}

export default Footer;