import styles from '../styles/components/Navbar.module.css';

interface NavbarProps {
    handleClickNavbar: (a:Number) => void;
}

export function Navbar({handleClickNavbar}: NavbarProps ) {
        
    return (
        <div className={styles.containerNavbar}>
            <div className={styles.container}>

                <div>
                    <button onClick={() => {handleClickNavbar(0)}}>
                        <img src="/calendar.svg" alt="Calendar"/>
                    </button>
                    
                    <button onClick={() => {handleClickNavbar(1)}}>
                        <img src="/planning_list.svg" alt="Planning list"/>
                    </button>
                    
                    <button onClick={() => {handleClickNavbar(2)}}>                        
                        <img src="/planning.svg" alt="Planning"/>
                    </button>                    
                </div>

                <div>
                    <button onClick={() => {handleClickNavbar(3)}}>
                        <img src="/settings.svg" alt="Settings"/>
                    </button>
                    
                    <button onClick={() => {handleClickNavbar(4)}}>                        
                        <img src="/user.svg" alt="User"/>
                    </button>
                </div>


            </div>
        </div>
    );

}