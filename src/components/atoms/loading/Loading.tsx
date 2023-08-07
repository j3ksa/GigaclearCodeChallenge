import Image from "next/image"
import styles from './Loading.module.sass'

export const Loading = () => {
    return (
        <div className={styles.loading}>
            <Image 
                src="/assets/tail-spin.svg" 
                alt="loading component"
                width={100}
                height={100}
            />
            <p className={styles.description}>
                Loading data
            </p>
        </div>
    )
}