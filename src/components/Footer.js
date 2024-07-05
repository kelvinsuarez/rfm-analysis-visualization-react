import React from "react";
import logoFooter from '../images/bugbusters.jpg';

function Footer () {
    return(
        <footer className="footer">
          <img className="footer__logo" src={logoFooter} alt="logo BugsBusters"/>
          <p className="footer__text">
            © &nbsp;&nbsp;&nbsp; •Isabel Domínguez •Kelvin Suárez •Alfredo López •Héctor Morales •Natalia Lopera 
            •Olaf de Jesús •Sergio Anaya
          </p>
        </footer>
    )
}

export default Footer