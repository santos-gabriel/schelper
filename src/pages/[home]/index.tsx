import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

import { Account } from "../../components/Account";
import { HorizontalSchedule } from "../../components/HorizontalSchedule";
import { Navbar } from "../../components/Navbar";
import { Planning } from "../../components/Planning";
import { Schedule } from '../../components/Schedule';
import { Settings } from "../../components/Settings";
import { VerticalSchedule } from "../../components/VerticalSchedule";
import { ProfileProvider } from "../../contexts/ProfileContext";



interface HomeProps {    
    userName: String
}


export default function Home(props: HomeProps) {
        const [ indexItemNavbar, setIndexItemNavbar ] = useState(0);

        function handleClickNavbar(index) {            
            setIndexItemNavbar(index);
        }

        return (
            <>            
                <title>ScHelper | Home</title>

                <ProfileProvider userNameProps={props.userName}>

                    <Navbar handleClickNavbar={handleClickNavbar}/>
                    
                    
                    {
                        (
                            () => {
                                switch(indexItemNavbar) {
                                case 0:
                                    return <Schedule orientation='Landscape' />;
                                    break;
                                case 1: 
                                    return <Schedule orientation='Portrait' />; 
                                    break;
                                case 2:
                                    return <Planning />; 
                                    break;
                                case 3:
                                    return <Settings />;
                                    break;
                                case 4:
                                    return <Account />
                                    break;
                                default: 
                                    return null; 
                                    break;
                    }
                        }).call(this)
                    }                        
                    

                </ProfileProvider>
            </>
        );    
    
}


export const getServerSideProps: GetServerSideProps = async (ctx) =>{    
    const { jwtTokenAcess } = ctx.req.cookies;
    const userName = ctx.query.username;
    
    if (jwtTokenAcess === undefined || jwtTokenAcess === null || jwtTokenAcess.length <= 0) {        
        ctx.res.writeHead(303, { Location: '/' });
        ctx.res.end();
    }     

    return {
        props: {            
            userName: String(userName)
        }
    }

}
