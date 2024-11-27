import React, { useEffect } from "react";
import styles from './Home.module.css'
import { useSelector } from "react-redux";

function Home(){
    const userId = useSelector((state)=>{
        state.userId
    })
    useEffect(()=>{console.log(userId)},[userId]) 
    return(
        <>
            <div className={styles.container} >
            </div>
        </>
    )
}

export default Home