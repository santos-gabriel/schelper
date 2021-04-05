import { GetServerSideProps } from "next";
import { HeaderHome } from "../../components/HeaderHome";
import { ProfileProvider } from "../../contexts/ProfileContext";



interface HomeProps {    
    userName: String
}


export default function Home(props: HomeProps) {
        
        return (
            <>
                <ProfileProvider userNameProps={props.userName}>
                    <HeaderHome />
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
