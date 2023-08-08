import styles from './OneCard.module.css';

import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const getBgColor = variant => {
  switch (variant) {
    case 'Medium':
      return "rgba(226, 163, 0, 1)";
    case "Hight":
      return "rgba(255, 43, 119, 1)";
    case "Low":
      return "rgba(107, 212, 117, 1)";    
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

const OneCard = ({ event, onDelete }) => {
    const navigate = useNavigate();  
    const item = event[0];
    
    const onClickDelete = evt => {
        evt.preventDefault();
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
                            <img className={styles.image} src={item.url} alt={"Event"} width={'100%'} height={'100%'} />
                        </div>
                        <div className={styles.conteinerText}>
                            <p className={styles.description}>{item.description}</p>
                            <div className={styles.conteinerOptions}>
                                <p className={styles.option}>{item.category}</p>
                                <p className={styles.priority} style={{ color: getBgColor(item.priority) }}>{item.priority}</p>
                                <p className={styles.option}>{item.location}</p>
                                <p className={styles.option}>{item.date} at {item.time}</p>
                            </div>
                        </div>
                        <div className={styles.conteinerButton}>
                            <Link className={styles.editButton} to={'edit'} >
                                <p>Edit</p>
                            </Link>
                            <button className={styles.deleteButton} onClick={onClickDelete}>Delete event</button>
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