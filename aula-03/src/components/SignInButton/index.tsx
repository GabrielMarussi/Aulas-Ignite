import { FaGithub } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton(){
    const isUserLoggedIn = true;
    
    const RenderButtonLogged = (
        <button 
            className={styles.signInButton}
            type="button"
        >
            <FaGithub color="#04d361" />
            Gabriel Marussi
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    )
    
    const RenderButtonNotLogged = (
        <button 
            className={styles.signInButton}
            type="button"
        >
            <FaGithub color="#eba417" />
            Sign in with Github 
        </button>

    )

    return isUserLoggedIn ? RenderButtonLogged : RenderButtonNotLogged

}