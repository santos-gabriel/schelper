import { setCookie } from '../utils/cookie';

interface authenticationUserProps {
    userName: string;
    userPassword: string;
}

export function getAuthentication(user: authenticationUserProps) : string {
    const cookieName = 'username';
    const cookieValue = user.userName;
    setCookie({cookieName, cookieValue});
    return `123`;
}