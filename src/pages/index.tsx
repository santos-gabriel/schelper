

import { GetServerSideProps } from 'next';
import { Head } from 'next/document';
import { SignIn } from '../components/SignIn';

import styles from '../styles/components/Home.module.css';


export default function Home() {
  return (
    <>      
      <title>ScHelper | Sign In</title>
      <SignIn />
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const {jwtTokenAcess, username} = ctx.req.cookies;

  if ((!(jwtTokenAcess === undefined || jwtTokenAcess === null || jwtTokenAcess.length <= 0)) &&
     (!(username === undefined || username === null || username.length <= 0))) {
    ctx.res.writeHead(302, { Location: `/home?username=${username}` });
    ctx.res.end();
  }    

  return {
    props: {

    }
  }

}