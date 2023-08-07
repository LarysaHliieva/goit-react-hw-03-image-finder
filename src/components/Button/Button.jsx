import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.loadMore} onClick={onClick} type="button">
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
