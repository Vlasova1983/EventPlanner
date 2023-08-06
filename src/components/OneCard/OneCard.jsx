import styles from './OneCard.module.css'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OneCard = ({ event, onClick }) => {
    const navigate = useNavigate();
    const item = event[0];   
    const handleDelete = (evt) => {
        evt.preventDefault();
        onClick(item.id); 
        navigate(-1);              
    };
    return (
       
            < div >
                < h2 className={styles.title} > {item.title}</h2 >
                <div className={styles.card}>
                    <div className={styles.imgConteiner}>
                        <img className={styles.image} src={item.url} alt={"Event"} width={'100%'} height={'100%'} />
                    </div>
                    <div className={styles.conteinerText}>
                        <p className={styles.description}>{item.description}</p>
                        <div className={styles.conteinerOptions}>
                            <p className={styles.option}>{item.categoria}</p>
                            <p className={styles.priority}>{item.priority}</p>
                            <p className={styles.option}>{item.location}</p>
                            <p className={styles.option}>{item.date} at {item.time}</p>
                        </div>
                    </div>                                
                    <div className={styles.conteinerButton}>
                        <Link className={styles.editButton} to={'/event/edit'} >
                            <p>Edit</p>
                        </Link>
                        <button className={styles.deleteButton} onClick={handleDelete}>Delete event</button>
                    </div>
                </div>                    
            </div >       
    )
}
export default OneCard;

OneCard.propTypes = {       
    event: PropTypes.array,
    onClick: PropTypes.func
}