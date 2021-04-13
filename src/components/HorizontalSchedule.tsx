import styles from '../styles/components/HorizontalSchedule.module.css';
import { LandscapeScheduleDays } from './LandscapeScheduleDays';
import { PortraitScheduleTime } from './PortraitScheduleTime';



export function HorizontalSchedule() {
    return (
        <>
            <LandscapeScheduleDays />
            <PortraitScheduleTime />
        </>
    );
}