import styles  from '../ChangeLanguage/ChangeLanguage.module.css';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { useLang } from '../../hooks/useLang';

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
        <button className={styles.ChangeLanguageButton} to="event" onClick={handleLang}>
            {lang === 'en' ?
                <p className={styles.addButtonText}>UK</p> :
                <p className={styles.addButtonText}>EN</p>
            }
            <Icon path={mdiChevronDown} size={1} color={'#3F3F3F'} />
        </button>                    
    )
}
export default ChangeLanguage;