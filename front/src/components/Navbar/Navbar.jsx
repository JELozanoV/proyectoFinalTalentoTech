import React from "react";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import Perfil from "../Perfil/Perfil";
import { useSelector } from 'react-redux';

function NavBar() {
    const isLoggedIn = useSelector(state => state.nitroKarts.userId !== 0);

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbar}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/about" className={styles.link}>About</Link>
                    <Link to="/contacto" className={styles.link}>Contacto</Link>
                </div>
                <div>
                    {!isLoggedIn && (
                        <>
                            <Link to="/login" className={`${styles.link} ${styles.login}`}>Login</Link>
                            <span>|</span>
                            <Link to="/register" className={`${styles.link} ${styles.register}`}>Register</Link>
                        </>
                    )}
                    {isLoggedIn && <Perfil  />}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
