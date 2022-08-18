import styles from'./card.module.css'
import PropTypes from 'prop-types'

export const Card = ({ produto })=>{    
    return(
        produto.map((item) => 
            <div key={item.id} className={styles.card}>
                <img src={item.imagem} alt="imagem do produto" className={styles.img}/>
                <div className={styles.dados}>
                    <h4 className={styles.h4}>{item.nome}</h4>
                    <p className={styles.descricao}>{item.descricao}</p>
                    <div className={styles.rodape}>
                        <p className={styles.preco}>R$ {item.valor.toFixed(2).replace('.', ',')}</p>
                        <p className={styles.preparo}>{item.tempoDePreparo} min</p> 
                    </div>                    
                </div>                      
            </div>        
        )        
    )
}

Card.propTypes = {
    protuto: PropTypes.shape({  
        imagem: PropTypes.string.isRequired,      
        nome: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        valor: PropTypes.number.isRequired,
        tempoPreparo: PropTypes.number.isRequired
    })
}