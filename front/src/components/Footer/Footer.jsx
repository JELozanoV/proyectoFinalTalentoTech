import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h3>Contacto</h3>
                    <p>Email: johnlozano331@outlook.com</p>
                    <p>Teléfono: 123-456-7890</p>
                </div>
                <div className="footer__section">
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li><Link to="#">Facebook</Link></li>
                        <li><Link to="#">Twitter</Link></li>
                        <li><Link to="#">Instagram</Link></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Información Adicional</h3>
                    <p>Esta aplicacion fue creada como proyecto integrador del modulo 3 de Soy Henty</p>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; 2024 Creada por John Lozano FT49 - Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;
