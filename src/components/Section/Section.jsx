
import PropTypes from 'prop-types'
import { Card } from '../Card/Card'

export const Section = ({nome, produtos}) => {
    return(
        <div>
            <h2>{nome}</h2>
            {produtos.map((el) =>  <Card key={el.id} produto={el}/>)} 
        </div>                           
    )
}

Section.propTypes = {    
    nome: PropTypes.string.isRequired,
    produtos: PropTypes.array.isRequired,    
}