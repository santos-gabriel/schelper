

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
