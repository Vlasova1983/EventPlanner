import { Link, useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Notiflix from 'notiflix';
import { useLang } from '../../hooks/useLang';
import { useEvent } from '../../hooks/useEvent';
import { getColor } from '../../utils/helpers/color/getColor';
import styles from './OneCard.module.css';

const OneCard = ({ event }) => {
    const { lang } = useLang();
    const { events, setEvents } = useEvent(); 
    const navigate = useNavigate();  
    const item = event[0];
    
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
                                <button className={styles.deleteButton} type="button"
                                    onClick={() => {
                                        lang === 'en' ? Notiflix.Notify.success('Congratulations! You have successfully deleted the event') : Notiflix.Notify.failure('Вітаємо!Ви успішно видалили подію.');
                                        setEvents(events.filter((event) => event.id !== item.id))
                                        navigate(-1);
                                     }}
                                >Delete event</button> :
                                <button className={styles.deleteButton} type="button"
                                    onClick={() => {
                                        lang === 'en' ? Notiflix.Notify.success('Congratulations! You have successfully deleted the event') : Notiflix.Notify.failure('Вітаємо!Ви успішно видалили подію.');
                                        setEvents(events.filter((event) => event.id !== item.id))
                                        navigate(-1);
                                     }}
                                >Видалити подію</button>
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
}