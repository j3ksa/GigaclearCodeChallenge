import styles from './EventInfo.module.sass'
import { Event } from 'src/types/post'
import { format12Hour } from 'src/utils/time';

interface Props {
    data: Event
    timestamp: string
}

export const EventInfo: React.FC<Props> = ({data, timestamp}) => {

    const {
        name,
        price,
        time
    } = data 

    return (
        <div className={styles.eventInfo}>
            <h1 className={styles.eventName}>{name}</h1>
            <div className={styles.info}>
                <span>{price}</span>
                <span>{format12Hour(time)} | {timestamp}</span>
            </div>
        </div>
    )
}