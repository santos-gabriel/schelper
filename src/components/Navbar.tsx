import styles from '../styles/components/Navbar.module.css';


export function Navbar() {

    return (
        <div className={styles.containerNavbar}>
            <div className={styles.container}>

                <div>
                    <button>
                        <img src="/calendar.svg" alt="Calendar"/>
                    </button>
                    
                    <button>
                        <img src="/planning_list.svg" alt="Planning list"/>
                    </button>
                    
                    <button>                        
                        <img src="/planning.svg" alt="Planning"/>
                    </button>                    
                </div>

                <div>
                    <button>
                        <img src="/settings.svg" alt="Settings"/>
                    </button>
                    
                    <button>                        
                        <img src="/user.svg" alt="User"/>
                    </button>
                </div>


            </div>
        </div>
    );

}