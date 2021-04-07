
import { useState } from 'react';
import styles from '../styles/components/Signup.module.css';


export function SignUp() {
    const [ userName, setUserName ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');


    function handleSignUp() {

    }

    return (
        <div className={styles.container}>                            
            <div className={styles.signUp}>
                
                <div>
                    <input type="text" placeholder="Login" onChange={(e) => setUserName(e.target.value)}/>
                    <input type="password" placeholder="Senha" onChange={(e) => setUserPassword(e.target.value)}/>
                </div>

                <div>
                    <button onClick={handleSignUp}>Sign In</button>
                    <a href="/">Já possuí cadastro? <br/>Realize um sign in</a>
                </div>

            </div>
        </div>
    );

}