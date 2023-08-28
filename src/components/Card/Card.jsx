import { Link } from 'react-router-dom'; 
import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import { getColor } from '../../utils/helpers/color/getColor';
import { getBackgColor } from '../../utils/helpers/backColor/getBackgColor';
import styles from "./Card.module.css";

const Card = ({ item }) => { 
  const { lang } = useLang();
  
  return(  
    <div className={styles.card} style={{background: getBackgColor(item.url) }}>
      <div className={styles.conteiner}> 
        <div className={styles.options}>
          <p className={styles.categoria}>{item.category}</p>
          <p className={styles.priority} style={{color: getColor(item.priority) }}>{item.priority}</p>
        </div> 
        <div className={styles.dateConteiner}>
          {lang === 'en' ?
            <p>{item.date} at {item.time}</p> :
            <p>{item.date} в {item.time}</p>
          }
          <p>{item.location}</p>                    
        </div>
        <div className={styles.conteinerContext}>            
            <h3 className={styles.titleCard}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p> 
            <div className={styles.conteinerLincCart}>
            {lang === 'en' ?
              <Link to={`event/${item.id}`} className={styles.linkCard} key={item.id} id={item.id}>More info</Link> :
              <Link to={`event/${item.id}`} className={styles.linkCard} key={item.id} id={item.id}>Більше інформації</Link>
            }
          </div>                   
        </div>   
      </div>                     
    </div>            
  )         
}

export default Card;

Card.propTypes = {   
  item:PropTypes.object,
}