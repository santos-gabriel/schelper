import { GetServerSideProps } from "next";
import { Navbar } from "../../components/Navbar";
import { ProfileProvider } from "../../contexts/ProfileContext";



interface HomeProps {    
    userName: String
}


export default function Home(props: HomeProps) {
        
        return (
            <>
                <title>ScHelper | Home</title>
                <ProfileProvider userNameProps={props.userName}>
                    <Navbar />
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
