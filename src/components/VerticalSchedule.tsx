import stylesDays from '../styles/components/ScheduleDays.module.css';
import sytlesTime from '../styles/components/ScheduleTime.module.css';
import { LandscapeScheduleTime } from './LandscapeScheduleTime';
import { PortraitScheduleDays } from './PortraitScheduleDays';


export function VerticalSchedule() {
    return (
        <>
            <div className={stylesDays.verticalScheduleBarDays}>
                <LandscapeScheduleTime />
            </div>
            <div className={sytlesTime.horizontalScheduleBarTime}>
                <PortraitScheduleDays />
            </div>
        </>
        
    );
}