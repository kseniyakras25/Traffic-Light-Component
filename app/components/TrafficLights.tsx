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

    useEffect(() => {
        const cycleTimeoutId = setTimeout(() => {
            switch (activeLight) {
                case 'green':
                    setActiveLight('yellow');
                    break;
                case 'yellow':
                    setActiveLight('red');
                    break;
                case 'red':
                    setActiveLight('green');
                    break;
            }
        }, durations[activeLight]);


        return () => clearTimeout(cycleTimeoutId);
    }, [activeLight]);

    return (
        <div>
            <div className={`${styles.container} ${activeLight}`}>

                <div className={`${styles.trafficLight} flex flex-col justify-center items-center`}>
                    <div className={`${styles.light} red ${activeLight === 'red' ? 'active' : ''}`}></div>
                    <div className={`${styles.light} yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
                    <div className={`${styles.light} green ${activeLight === 'green' ? 'active' : ''}`}></div>
                </div>

                <div className={styles.info}>
                    <p className={`mt-10`}>The light is <span>{activeLight}</span>.</p>
                </div>
            </div>
            <div className={styles.cycleInfo}>
                <p>Complete cycle: 20 seconds</p>
                <p>Green & Red: 8.5s • Yellow: 3s</p>
            </div>
        </div>
    )
}