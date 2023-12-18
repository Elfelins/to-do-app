import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();
    const handleOnClick = e => {
       e.preventDefault();
       dispatch(toggleCardFavorite(props.id));
    }    
    return (
        <li className={styles.card}>{props.title}
            <button class={styles.button} onClick = { handleOnClick } ><i className = {clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
        </li>
    );
};

export default Card;