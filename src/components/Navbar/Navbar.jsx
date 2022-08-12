import './navbar.css'
import celular from '../../assets/img/iphone.png'
import pizza from '../../assets/img/pizza.png'
export const Navbar = ()=>{
    return(
        <nav className="navbar">
            <div className='contato'>
                <img src={celular} alt="imagem celular" />
                <div className='telefone'>
                    <p>+55 83 8888-8888</p>
                    <p className='horario'>08:00h - 22:00h</p>
                </div>
            </div>
            <div className="logo">
                <img src={pizza} alt="logo restaurante"/>
                <h1>Tech Pizza</h1>
                <p>since 1988</p>
            </div>            
            <a href="">Menu</a>
        </nav>
    )
}