import styles from './footer.module.css'

export const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <address className='{styles.address}'>
                <strong><p>Nosso endereço</p></strong>
                <p>Rua JavaScript, 101</p>
                <p>Campina Grande - PB, 58480-000</p>
                <p>Brasil</p>
            </address>
            <div className={styles.copyright}>
                <strong><p>DevInRestaurant</p></strong>
                <p>&copy; 2022 Todos os direitos reservados.</p>
            </div> 
            <div className={styles.contato}>
                <div>
                    <strong><p>Fale conosco</p></strong>
                    <p>+55 83 8888-8888</p>
                    <p>08:00h - 22:00h</p>
                </div>                
                <div className={styles.social}>
                    <a href="">
                        <img src="../../../public/linkedin.png" alt="logo Linkedin" />
                    </a>
                    <a href="">
                        <img src="../../../public/instagram.png" alt="logo Instagram" />
                    </a>
                    <a href="">
                        <img src="../../../public/github.png" alt="logo Github" />
                    </a>
                </div>
            </div>           
            
        </footer>
    )
}