import styles from './Logo.module.css'
import logo from '../../../assets/Logo.png'
function Logo(){
    return(
        <div>
            <img src={logo} alt="logo" className={styles.logo} />
        </div>
    )
}

export default Logo