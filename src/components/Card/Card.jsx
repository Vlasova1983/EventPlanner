import styles  from  "./Card.module.css";
import { Link } from 'react-router-dom'; 

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

const Card = ({ item }) => { 
 
    return( 
        <>
            <div className={styles.card}>
                <div className={styles.imgConteiner}>
                    <img className={styles.image} src={item.url} alt={"Event"} width={'100%'} height={'100%'}/>
                </div>
                <div className={styles.options}>
                    <p className={styles.categoria}>{item.category}</p>
                    <p className={styles.priority} style={{color: getBgColor(item.priority) }}>{item.priority}</p>
                </div>                
                <div className={styles.conteinerContext}>
                    <div className={styles.dateConteiner}>
                        <p>{item.date} at {item.time}</p>
                        <p>{item.location}</p>                    
                    </div>
                    <h3 className={styles.titleCard}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p> 
                    <div className={styles.conteinerLincCart}>
                        <Link to= {`event/${item.id}`}  className={styles.linkCard} key={item.id} id={item.id}>More info</Link>
                    </div>                   
                </div>               
            </div>           
                   
        </>            
    )         
}

export default Card;