import { Button } from '../components/Button';
import style from './Register.module.css';
import { useState } from 'react';


export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function updateName(event) {
        setName(event.target.value);
    }

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    return (
        <div className={style.registerPage}>
          <h2>Create your account</h2>
          <form className={style.form}>
            <div className={style.row}>
                <input onChange={updateName} value={name} id='name' type='text' placeholder='Name' />
            </div>
            <div className={style.row}>
                <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
            </div>
            <div className={style.row}>
                <input id='password' type='text' placeholder='Password' />
            </div>
          </form>
          
          <Button buttonTo="/feature1 "title="Register"/>
          <Button buttonTo="/feature1 "title="Login"/>
        </div>
    );
  }
  
