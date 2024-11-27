
import React, { useState, useEffect } from 'react';
import styles  from './Mosaico.module.css'

function Mosaico() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '../../../src/assets/mosaico/imagen 1.jpeg',
        '../../../src/assets/mosaico/imagen 2.png',
        '../../../src/assets/mosaico/imagen 3.jpeg',
        '../../../src/assets/mosaico/imagen 4.jpeg',
        '../../../src/assets/mosaico/imagen 5.jpeg'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.mosaico}>
            <img
                src={images[currentImageIndex]}
                alt="Imagen"
                className={styles.imagen}
            />
            <div className={styles.texto}>
                <h4>Con Nitro Karts disfrutas de la adrenalina y vives la experiencia</h4>
                <h1>De conducir como un piloto profesional</h1>
            </div>
        </div>
    );
}

export default Mosaico;
