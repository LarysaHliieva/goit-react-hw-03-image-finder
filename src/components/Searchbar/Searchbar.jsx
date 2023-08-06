// import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <header className={styles.searchbar}>
      <form className={styles.form}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

// Filter.propTypes = {
//   hangleFilter: PropTypes.func.isRequired,
// };
