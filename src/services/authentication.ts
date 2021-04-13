
interface authenticationUserProps {
    userName: string;
    userPassword: string;
}

export function getAuthentication(user: authenticationUserProps) : string {
    return `123`;
}