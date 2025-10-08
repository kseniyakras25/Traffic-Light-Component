import styles from './TrafficLights.module.css'


export default function TrafficLights() {

    return (
        <div className={`${styles.container} ${styles.green}`}>
            
            <div className={`${styles.trafficLight} flex flex-col justify-center items-center`}>
                <div className={styles.light}></div>
                  <div className={styles.light}></div>
                    <div className={styles.light}></div>
            </div>
            
            <div className={styles.info}>
                <p className={`${styles.status} mt-10`}>The light is <span>green</span>.</p>
            </div>
        </div>
    )
}