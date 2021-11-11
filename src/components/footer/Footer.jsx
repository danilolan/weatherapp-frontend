import React from 'react';
import "./footer.scss"

function Footer(props) {
    return ( 
    <footer className="footer">
        <span>
            Desenvolvido com <i className="fa fa-heart text-danger"></i> por
            <a href="https://www.linkedin.com/in/danilo-herculano-3906761b4/"><strong> DaniloHerc</strong> </a>
            
        </span>
    </footer> );
}

export default Footer;