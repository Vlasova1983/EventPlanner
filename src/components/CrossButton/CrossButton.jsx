import { ReactComponent as IconCross } from './cross-small.svg';
import styles from './CrossButton.module.css';

const CrossButton = () => {
    return (       
        <button  type="button" className={styles.crossButton} >                
            <IconCross className={styles.iconButton} aria-label={'icon-delete'}/>
        </button>                   
    ) 
}

export default CrossButton;