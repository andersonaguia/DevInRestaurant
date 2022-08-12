import './footer.css'

export const Footer = ()=>{
    return(
        <footer className='footer'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim ea soluta, nihil ipsa quo!</p>
            <p>&copy; 2022 Todos os direitos reservados.</p>
            <div className='social'>
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
        </footer>
    )
}