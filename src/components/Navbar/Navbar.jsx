import styles from './navbar.module.css'

export const Navbar = ()=>{
    return(
        <nav className={styles.navbar}>            
            <div className={styles.logo}>
                <img src="../../../public/cutlery.png" alt="logo restaurante"/>
                <h1>DevInRestaurant</h1>
            </div>            
            <a href="">Menu</a>
        </nav>
    )
}