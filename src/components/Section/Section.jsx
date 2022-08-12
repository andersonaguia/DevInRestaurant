
import PropTypes from 'prop-types'

export const Section = ({secao}) => {
    return(
        <h2>{secao.nome}</h2>
    )
}

Section.propTypes = {
    secao: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        produto: PropTypes.object.isRequired,
    })
}