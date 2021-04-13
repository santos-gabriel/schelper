
interface scheduleConfiguration {
    daysOfWeek: string[];
    startTime: {
        startHour: Number;
        startMinute: Number;
    };
    endTime: {
        endHour: Number;
        endMinute: Number;
    };
}

interface userProps {
    userName: String;
    userId: Number;
}

export function getScheduleConfiguration(user: userProps) : scheduleConfiguration{
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const startTime = {
        startHour: 08,
        startMinute: 0
    };
    const endTime = {
        endHour: 15,
        endMinute: 0
    };
    return {
        daysOfWeek,
        startTime,
        endTime
    }
}