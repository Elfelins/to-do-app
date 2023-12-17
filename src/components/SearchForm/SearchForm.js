import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    let searchString = '';

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
    }
    return (
        <form form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." onChange={e => searchString=e.target.value}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;