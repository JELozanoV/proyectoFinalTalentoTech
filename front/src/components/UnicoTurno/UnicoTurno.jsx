import React, { useState } from 'react';
import axios from 'axios';
import styles from './UnicoTurno.module.css';

function UnicoTurno(props) {
    const [estadoCita, setEstadoCita] = useState(props.turno.status); 

    const fecha = new Date(props.turno.date);
    const turnoId = props.turno.id;

    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    function handleCancelAppointment(turno) {
        axios.put(`http://localhost:3000/appointments/cancel/${turnoId}`)
            .then(response => {
                console.log("Cita cancelada exitosamente:", response.data);
                alert("Turno cancelado exitosamente");
                setEstadoCita("cancelled"); 
            })
            .catch(error => {
                console.error("Error al cancelar la cita:", error);
                alert("Hubo un error al cancelar la cita. Por favor, inténtalo de nuevo.");
            });
    }

    return (
        <div className={styles.tarjeta}>
            <h2>Turno a nombre de : {props.turno.user.name}</h2>
            <p><strong>Correo electrónico:</strong> {props.turno.user.email}</p>
            <p><strong>Fecha:</strong> {fechaFormateada}</p>
            <p><strong>Hora:</strong> {props.turno.time}</p>
            <p><strong>Descripción:</strong> {props.turno.description}</p>
            <p><strong>Estado: </strong> 
                <span className={estadoCita === 'active' ? styles.estadoActivo : styles.estadoCancelado}>
                    {estadoCita}
                </span>
            </p>

            
            {estadoCita !== "cancelled" && <button onClick={() => handleCancelAppointment(props.turno)}>Cancelar Cita</button>}
        </div>
    );
}

export default UnicoTurno;

