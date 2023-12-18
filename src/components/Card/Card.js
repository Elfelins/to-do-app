import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
    const dispatch = useDispatch();
    const handleOnClick = e => {
       e.preventDefault();
       dispatch(toggleCardFavorite(props.id));
    } 
    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }   
    return (
        <li className={styles.card}>{props.title}
            <div>
                <button className = {styles.button} onClick = {handleOnClick} ><i className = {clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
                <button className = {styles.button} onClick = {handleRemove} ><i className = "fa fa-trash"/></button>
            </div>
        </li>
    );
};

export default Card;