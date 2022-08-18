import styles from './categoria.module.css'
import PropTypes from 'prop-types';
import { Card } from '../Card/Card';

export const Categoria = ({ produtos, categoria }) => {    
  const produtosFiltrados = produtos.filter((item) => item.categoria === categoria);
  return (
    <div className={styles.subCategoria}>
      <div>
        <h3>{categoria}</h3>
        <hr/>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Card produto={produtosFiltrados} />
        </li>
      </ul>       
    </div>
  );
};

Categoria.propTypes = {
  produtos: PropTypes.array.isRequired,
  categoria: PropTypes.string,
};