import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UnicoTurno from '../../components/UnicoTurno/UnicoTurno';
import "./MisTurnos.css";
import { useSelector } from 'react-redux';
import ScheduleAppointment from '../../components/ScheduleAppointment/ScheduleAppointment';

function MisTurnosUsuario() {
  const [misTurnos, setMisTurnos] = useState([]);
  const usuarioId = useSelector((state) => state.nitroKarts.userId); 

  useEffect(() => {
    axios.get(`http://localhost:3000/appointments`)
      .then((res) => setMisTurnos(res.data))
      .catch((error) => console.log(error));
  }, [usuarioId]); 
  
    return (
        <div>
            <h1>Mis turnos </h1>
            <div className="misTurnos">
                {misTurnos.length > 0 ? (
                    misTurnos.map((turno, index) => (
                        <UnicoTurno key={turno.id} turno={turno} />
                    ))
                ) : (
                    <p>No tienes turnos agendados</p>
                )}
            </div>
            <div>
                <ScheduleAppointment/>
            </div>
        </div>
    );
}

export default MisTurnosUsuario;