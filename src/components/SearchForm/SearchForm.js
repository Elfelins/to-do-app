import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, getSearchString } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchString = useSelector(getSearchString);
    const[searchValue, setSearchValue] = useState(searchString);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchValue));
    }
    return (
        <form form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;