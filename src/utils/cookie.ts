import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

interface setCookieAndRedirectInterface{
    cookieName: String;
    cookieValue: String;
    routerRedirect: String;
}

interface setCookie {
    cookieName: String;
    cookieValue: String;
}

interface removeCookieAndRedirect {
    cookieName: String;
    routerRedirect: String;
}

export function setCookieAndRedirect (props: setCookieAndRedirectInterface) {     
    cookie.set(props.cookieName.valueOf(), props.cookieValue);      
    Router.push(encodeURI(props.routerRedirect.valueOf()));
}

export function setCookie(props: setCookie) {
    cookie.set(props.cookieName.valueOf(), props.cookieValue)
}

export function removeCookie(props: string) {
    cookie.remove(props);
}

export function removeCookieAndRedirect(props: removeCookieAndRedirect) {
    cookie.remove(props.cookieName.valueOf());
    Router.push(encodeURI(props.routerRedirect.valueOf()));
}
