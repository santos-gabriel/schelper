import { HorizontalSchedule } from "./HorizontalSchedule";
import { VerticalSchedule } from "./VerticalSchedule";

interface scheduleProps {
    orientation: 'Portrait' | 'Landscape';
}

export function Schedule({orientation} : scheduleProps) {
    return (
        <>
            {orientation === 'Portrait' ? (
                <VerticalSchedule />
            ) : (
                <HorizontalSchedule />
            )}
        </>
    );
}