import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../redux/slice';
import './Perfil.css';

function Perfil() {
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const userId = useSelector(state => state.nitroKarts.userId);
    const dispatch = useDispatch();

    const toggleMostrarOpciones = () => {
        setMostrarOpciones(!mostrarOpciones);
    };

    const handleLogout = () => {
        dispatch(userLogout());
    };

    return (
        <div className="perfil">
            <div className="perfil__icono" onClick={toggleMostrarOpciones}>
             <span className='perfil'>     Perfil     </span>
            </div>
            {mostrarOpciones && (
                <div className="perfil__opciones">
                    <Link to="/mis-turnos/" className="perfil__opcion">Mis turnos</Link>
                    <button onClick={handleLogout} className="perfil__opcion">Cerrar sesión</button>
                </div>
            )}
        </div>
    );
}

export default Perfil;

