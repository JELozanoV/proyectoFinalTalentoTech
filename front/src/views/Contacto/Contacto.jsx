import React from 'react';
import './Contacto.css'; // Importa el archivo de estilos CSS

function Contacto() {
    return (
        <div className="contacto">
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto con nosotros. ¡Estamos aquí para ayudarte!</p>
            <div className="info-contacto">
                <p><strong>Email:</strong> info@example.com</p>
                <p><strong>Teléfono:</strong> 123-456-7890</p>
                <p><strong>Dirección:</strong> Calle Ejemplo, Ciudad, País</p>
            </div>
        </div>
    );
}

export default Contacto;
