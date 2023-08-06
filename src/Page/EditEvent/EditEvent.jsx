import styles from "./EditEvent.module.css";
import { PropTypes } from 'prop-types';
import BackButton from "../../components/BackButton/BackButton";

const EditEvent = ({ events, addClick }) => {
    console.log(events, addClick)
    return(
        <div className={styles.conteiner}>
            <BackButton />
            <h2>Edit event</h2>
        </div>        
    )
}
export default EditEvent;
EditEvent.propTypes = {       
    events: PropTypes.arrayOf(PropTypes.shape()), 
    addClick:PropTypes.func
}