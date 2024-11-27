import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css'; 

function ErrorPage() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    useEffect(() => {
        setCountdown(5);
    }, []);

    return (
        <div className={styles.errorPage}>
            <h2 className={styles.errorTitle}>Ruta no encontrada</h2>
            <p className={styles.countdown}>Redirigiendo en {countdown} segundos...</p>
        </div>
    );
}

export default ErrorPage;
