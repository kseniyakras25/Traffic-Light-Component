'use client';

import { useState, useEffect } from 'react';
import type { LightColor, LightDurations } from '@/app/types/lights';
import styles from './TrafficLights.module.css'


export default function TrafficLights() {
    const [activeLight, setActiveLight] = useState<LightColor>('green');

    // Light cycle durations in milliseconds
    const durations: LightDurations = {
        red: 8500,
        yellow: 3000,
        green: 8500
    };


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