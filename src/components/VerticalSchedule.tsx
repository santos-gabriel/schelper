import styles from '../styles/components/VerticalSchedule.module.css';
import { LandscapeScheduleTime } from './LandscapeScheduleTime';
import { PortraitScheduleDays } from './PortraitScheduleDays';


export function VerticalSchedule() {
    return (
        <>
            <PortraitScheduleDays />
            <LandscapeScheduleTime />
        </>
    );
}