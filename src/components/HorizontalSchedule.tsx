import stylesDays from '../styles/components/ScheduleDays.module.css';
import stylesTime from '../styles/components/ScheduleTime.module.css';
import { LandscapeScheduleDays } from './LandscapeScheduleDays';
import { PortraitScheduleTime } from './PortraitScheduleTime';



export function HorizontalSchedule() {
    return (
        <>
            <div className={stylesDays.horizontalScheduleBarDays}>
                <LandscapeScheduleDays />
            </div>
            <div className={stylesTime.verticalScheduleBarTime}>
                <PortraitScheduleTime />            
            </div>
        </>
        );
}