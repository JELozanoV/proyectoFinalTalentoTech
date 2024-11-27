import React from "react";
import styles from './Header.module.css'
import Logo from "../Navbar/Logo/Logo";
import NavBar from "../Navbar/Navbar";


function Header(){
    return(
        <>
           <div className={styles.container} >
               <Logo/>
               <NavBar/>
            </div>
        </>
    )
}

export default Header