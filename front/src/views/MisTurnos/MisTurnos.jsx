import UnicoTurno from '../../components/UnicoTurno/UnicoTurno'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "./MisTurnos.css"

function MisTurnos() {
    const [misTurnos, setMisTurnos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/appointments/')
            .then((res) => setMisTurnos(res.data))
            .catch((error) => console.log(error));
    }, [])

    return (
        <div>
                <h1>Turnos en pista</h1>
            <div className="misTurnos"> 
                {misTurnos?.map((turno, index) => (
                    <UnicoTurno key={index} turno={turno} />
                ))}
            </div>

        </div>
    )
}

export default MisTurnos
