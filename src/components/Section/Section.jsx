import styles from './section.module.css'
import PropTypes from 'prop-types'
import { Card } from '../Card/Card'
import { Categoria } from '../Categoria/Categoria'

export const Section = ({nome, produtos, categoria}) => {
    return(
        <div className={styles.section}>
            <h2 className={styles.h2}>{nome}</h2>
            {categoria?.length > 0 ? (
              categoria.map((cat, index) => <Categoria key={index} produtos={produtos} categoria={cat} />)
            ) : (
              <Card produto={produtos} />
            )}           
        </div>
                                 
    )
}

Section.propTypes = {    
    nome: PropTypes.string.isRequired,
    produtos: PropTypes.array.isRequired,  
    categoria: PropTypes.array,  
}