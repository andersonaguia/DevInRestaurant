import './card.css'
import PropTypes from 'prop-types'

export const Card = ({ produto })=>{
    return(
        <div className='card'>
            <p>{produto.nome}</p>
            <p>{produto.descricao}</p>
            <p>{produto.valor}</p>
            <p>{produto.tempoPreparo}</p>            
        </div>
    )
}

Card.propTypes = {
    protuto: PropTypes.shape({        
        nome: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        valor: PropTypes.number.isRequired,
        tempoPreparo: PropTypes.string.isRequired
    })
}