
import { createMuiTheme, TextField, ThemeProvider } from '@material-ui/core';
import { useState } from 'react';
import styles from '../styles/components/Signup.module.css';


export function SignUp() {
    const [ userName, setUserName ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

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

    function handleSignUp() {

    }

    return (
        <div className={styles.container}>                            
            <div className={styles.signUp}>
                
                <div>
                    <ThemeProvider theme={theme}>
                        <TextField label="Login" onChange={(e) => setUserName(e.target.value)}/>                            
                        <TextField 
                            type="password" 
                            label="Senha" 
                            onChange={(e) => setUserPassword(e.target.value)}                            
                        />
                    </ThemeProvider>
                </div>

                <div>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <a href="/">Já possuí cadastro? <br/>Realize um sign in</a>
                </div>

            </div>
        </div>
    );

}