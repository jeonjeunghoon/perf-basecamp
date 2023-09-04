import React, { memo } from 'react';
import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch';

import styles from './SearchBar.module.css';

type SearchbarProps = {
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const SearchBar = memo(({ onEnter, onChange, onSearch }: SearchbarProps) => {
  return (
    <section className={styles.searchbarSection}>
      <h3 className={styles.searchbarTitle}>- find the best gif now - </h3>
      <div className={styles.searchbarContainer}>
        <input
          className={styles.searchInput}
          type='text'
          onKeyPress={onEnter}
          onChange={onChange}
        />
        <button className={styles.searchButton} type='button' onClick={onSearch}>
          <AiOutlineSearch color='white' size='2rem' />
        </button>
      </div>
    </section>
  );
});

export default SearchBar;
