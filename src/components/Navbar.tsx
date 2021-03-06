import styles from '../styles/components/Navbar.module.css';

import { removeCookie, removeCookieAndRedirect } from '../utils/cookie';

interface NavbarProps {
    handleClickNavbar: (a:Number) => void;
}

export function Navbar({handleClickNavbar}: NavbarProps ) {
        
    function handleClickNavbarUserLogout() {
        removeCookie('username');
        const cookieName: string = 'jwtTokenAcess';
        const routerRedirect: string = '/';
        removeCookieAndRedirect({cookieName, routerRedirect});
    }

    return (
        <div className={styles.containerNavbar}>
            <div className={styles.container}>

                <div>
                    <button title="Visualização Horizontal" onClick={() => {handleClickNavbar(0)}}>
                        <img src="/calendar.svg" alt="Calendar"/>
                    </button>
                    
                    <button title="Visualização Vertical" onClick={() => {handleClickNavbar(1)}}>
                        <img src="/planning_list.svg" alt="Planning list"/>
                    </button>
                    
                    <button title="Adicionar Atividade" onClick={() => {handleClickNavbar(2)}}>                        
                        <img src="/planning.svg" alt="Planning"/>
                    </button>                    
                </div>

                <div>
                    <button title="Configurações" onClick={() => {handleClickNavbar(3)}}>
                        <img src="/settings.svg" alt="Settings"/>
                    </button>
                    
                    {/* <button onClick={() => {handleClickNavbar(4)}}>                         */}
                    <button title="Conta" onClick={handleClickNavbarUserLogout}>                        
                        <img src="/user.svg" alt="User"/>
                    </button>
                </div>


            </div>
        </div>
    );

}