import { Button } from '../components/Button';
import style from './Login.module.css';
import { useState } from 'react';
import button from '../components/Button.module.css';


export function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    function registerUser(event) {
        event.preventDefault();

        console.log('register');
    }

    return (
        <div className={style.loginPage}>
          <h2>Log in to your account</h2>
          <form className={style.form}>
            <div className={style.row}>
                <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
            </div>
            <div className={style.row}>
                <input onChange={updatePassword} value={password} id='password' type='password' placeholder='Password' />
            </div>
            
          </form>

          <button onClick={registerUser} type="submit" className={button.button} >Login</button>
          <p>or</p>
          <Button buttonTo="/register" title="Register"/>
        </div>
    );
  }
  
