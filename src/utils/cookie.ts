import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

interface setCookieAndRedirectInterface{
    cookieName: String;
    cookieValue: String;
    routerRedirect: String;
}

export function setCookieAndRedirect (props: setCookieAndRedirectInterface) {     
    cookie.set(props.cookieName.valueOf(), props.cookieValue);      
    Router.push(encodeURI(props.routerRedirect.valueOf()));
}
