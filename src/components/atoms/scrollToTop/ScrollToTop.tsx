import { useState, useRef, useEffect } from "react";
import styles from './ScrollToTop.module.sass'

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)
    const prevScrollPos = useRef(0)

    const isBrowser = () => typeof window !== 'undefined';

    const handleScroll = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const toggleVisibility = () => {
          const currentScrollPos = window.scrollY;
    
          if (currentScrollPos > 250 && currentScrollPos > prevScrollPos.current) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
    
          prevScrollPos.current = currentScrollPos;
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, [isVisible]);

    return (
        <>
            {isVisible &&
                <button 
                    className={styles.scroll}
                    onClick={handleScroll}
                    aria-label="scroll to top"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        fill="currentColor" 
                        className="bi bi-arrow-up-circle" 
                        viewBox="0 0 16 16"
                    > 
                        <path 
                            fillRule="evenodd" 
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                        /> 
                    </svg> 
                </button>
            }
        </>
    )
}