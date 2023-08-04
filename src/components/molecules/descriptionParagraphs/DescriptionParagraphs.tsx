import styles from './DescriptionParagraphs.module.sass'
import { Paragraphs } from 'src/types/post'

interface Props {
    paragraphs: Paragraphs
}

export const DescriptionParagraphs: React.FC<Props> = ( {paragraphs} ) => {
    return (
        <>
            {Object.entries(paragraphs).map(([key, value]) => (
                <p
                    key={key}
                    className={`${styles.paragraphs} ${styles[key]}`}
                >
                    {value}
                </p>
            ))}
        </>
    )
}