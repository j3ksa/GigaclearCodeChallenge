import { useState } from "react";
import styles from './SignUp.module.sass'

export const SignUp: React.FC = () => {
    const [disabled, setDisabled] = useState(false)

    const handleButtonPress = () => {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 5000);
    }

    return (
        <button 
            className={styles.button}
            disabled={disabled}
            onClick={handleButtonPress}
            aria-label="sign up"
        >
            {disabled ? 'Thanks for signing up!' : 'Sign up to this event'}
        </button>
    )
}