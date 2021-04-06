import { GetServerSideProps } from "next";
import { ProfileProvider } from "../../contexts/ProfileContext";



interface HomeProps {    
    userName: String
}


export default function Home(props: HomeProps) {
        
        return (
            <>
                <title>ScHelper | Home</title>
                <ProfileProvider userNameProps={props.userName}>
                    <h1>Hello world</h1>
                </ProfileProvider>
            </>
        );    
    
}


export const getServerSideProps: GetServerSideProps = async (ctx) =>{    
    const { jwtTokenAcess } = ctx.req.cookies;
    const userName = ctx.query.username;
    
    if (userName === undefined || userName === null || userName.length <= 0) {        
        ctx.res.writeHead(303, { Location: '/' });
        ctx.res.end();
    }     

    return {
        props: {            
            userName: String(userName)
        }
    }

}
