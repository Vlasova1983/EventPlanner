import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { useLang } from '../../hooks/useLang';
import styles from '../ChangeLanguage/ChangeLanguage.module.css';

const ChangeLanguage = () => {
    const { lang, setLang } = useLang();

    const handleLang = () => { 
        if (lang === 'uk') {     
        setLang('en')
        }else{
        setLang('uk')
        }
        window.location.reload();
    };


    return (          
        <button className={styles.ChangeLanguageButton} to="event"  type="button" onClick={handleLang}>
            {lang === 'en' ?
                <p className={styles.addButtonText}>UK</p> :
                <p className={styles.addButtonText}>EN</p>
            }
            <Icon path={mdiChevronDown} size={1} color={'#3F3F3F'} aria-label={'icon-arrow-down'} />
        </button>                    
    )
}
export default ChangeLanguage;