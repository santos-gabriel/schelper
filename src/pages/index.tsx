

import { Head } from 'next/document';
import { Login } from '../components/Login';

import styles from '../styles/components/Home.module.css';


export default function Home() {
  return (
    <>      
      <title>ScHelper | Sign In</title>
      <Login />
    </>
  )
}
