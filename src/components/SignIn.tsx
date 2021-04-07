

import { useState } from 'react';
import styles from '../styles/components/SignIn.module.css';


export function SignIn() {

    const [ userName, setUserName ] = useState('');
    const [ userPassword, setUserPassword] = useState('');

    function handleSignIn(){
        if (userName === undefined || userName === null || userName.length <= 0) {
            return;
        }
        if (userPassword === undefined || userPassword === null || userPassword.length <= 0) {
            return;
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
                        <input type="text" placeholder="Login" onChange={(e) => setUserName(e.target.value)}/>
                        <input type="password" placeholder="Senha" onChange={(e) => setUserPassword(e.target.value)}/>
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