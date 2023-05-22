import React from 'react'

import styles from './TreinerItem.module.scss';

const TreinerItem = ({ trainer }) => {
    return (
        <div className={styles.main} key={trainer.name}>
            <img src={trainer.img} alt="hello" />
            <div className={styles.name}>{trainer.name}</div>
            <div className={styles.text}>{trainer.text}</div>
        </div>
    )
}

export default TreinerItem