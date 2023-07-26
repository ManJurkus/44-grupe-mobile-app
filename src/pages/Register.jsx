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
            <div className={style.checkboxStyle}>
                <input type="checkbox" id="checkbox"></input>
                    <label for="checkbox">Agree to our TOS</label>
                
            </div>
            
          </form>
          
          <Button buttonTo="/feature1 "title="Register"/>
          <p>or</p>
          <Button buttonTo="/feature1 "title="Login"/>
        </div>
    );
  }
  
