import { Link, useNavigate} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import { getColor } from '../../utils/helpers/color/getColor';
import styles from './OneCard.module.css';

const OneCard = ({ event, onDelete }) => {
    const {lang} = useLang();
    const navigate = useNavigate();  
    const item = event[0];
    
    const onClickDelete = () => {       
        navigate(-1); 
        onDelete(item.id);                     
    };
    
    return (
        <>
            {item === undefined ? <p></p> :
                < div >
                    < h2 className={styles.title}>{item.title}</h2 >
                    <div className={styles.card}>
                        <div className={styles.imgConteiner}>                           
                            <img className={styles.image} srcSet={`${item.url} 1x, ${item.url2} 2x`} src={item.url} alt={"Event"} width={'100%'} height={'100%'} loading={'lazy'}/>
                        </div>
                        <div className={styles.conteinerText}>
                            <p className={styles.description}>{item.description}</p>
                            <div className={styles.conteinerOptions}>
                                <p className={styles.option}>{item.category}</p>
                                <p className={styles.priority} style={{ color: getColor(item.priority) }}>{item.priority}</p>
                                <p className={styles.option}>{item.location}</p>
                                {lang === 'en' ?
                                    <p className={styles.option}>{item.date} at {item.time}</p> :
                                    <p className={styles.option}>{item.date} в {item.time}</p>
                                }
                            </div>
                        </div>
                        <div className={styles.conteinerButton}>
                            <Link className={styles.editButton} to={'edit'} >
                                {lang === 'en' ?
                                    <p>Edit</p> :
                                    <p>Редагувати</p>
                                }
                            </Link>
                            {lang === 'en' ?
                                <button className={styles.deleteButton}  type="button" onClick={onClickDelete}>Delete event</button> :
                                <button className={styles.deleteButton}   type="button" onClick={onClickDelete}>Видалити подію</button>
                            }
                        </div>
                    </div>
                </div >
            } 
        </>
    )
}
export default OneCard;

OneCard.propTypes = {       
    event: PropTypes.array,
    onDelete: PropTypes.func
}