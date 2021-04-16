


import { useState } from 'react';

import styles from '../styles/components/SignIn.module.css';

import { setCookieAndRedirect } from '../utils/cookie';
import { getAuthentication } from '../services/authentication';
import { createMuiTheme, Input, TextField, ThemeProvider } from '@material-ui/core';


export function SignIn() {

    const [ userName, setUserName ] = useState('');
    const [ userPassword, setUserPassword] = useState('');

    const theme = createMuiTheme({
        palette: {            
            primary: {
                main: '#ffffffff'
            },
            secondary: {
                main: '#255000'
            },
            text: {
                primary: '#ffffffff',
                secondary: '#ffffffff'
            }
        },         
    })

    async function handleSignIn(){
        console.log(`userName=${userName} | userPassword=${userPassword}`);
        if (userName === undefined || userName === null || userName.length <= 0) {
            return;
        }
        if (userPassword === undefined || userPassword === null || userPassword.length <= 0) {
            return;
        }

        const routerRedirect: String = `/home?username=${userName}`;
        const cookieName: string = 'jwtTokenAcess';
        const cookieValue: string = getAuthentication({userName, userPassword});        

        await setCookieAndRedirect({cookieName, cookieValue, routerRedirect});

    }

    function handleKeyDownPassword(e) {        
        if (e.keyCode === 13) {
            handleSignIn();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerSignIn}>            
                
                <div className={styles.SignInImg}>
                    <img src="/schedule.svg" alt="Schedule"/>
                </div>
                
                <div className={styles.signIn}>
                    
                    <div>
                        <ThemeProvider theme={theme}>
                            <TextField label="Login" onChange={(e) => setUserName(e.target.value)}/>                            
                            <TextField 
                                type="password" 
                                label="Senha" 
                                onChange={(e) => setUserPassword(e.target.value)}
                                onKeyDown={(e) => handleKeyDownPassword(e)}
                            />
                        </ThemeProvider>
                    </div>

                    <div>
                        <button onClick={handleSignIn}>Sign In</button>
                        <a href="/signup">Não possuí cadastro? <br/>Realize um sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}