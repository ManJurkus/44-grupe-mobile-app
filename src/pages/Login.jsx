import { Button } from '../components/Button';
import style from './Login.module.css';
import { useState } from 'react';
import button from '../components/Button.module.css';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrors, setLoginErrors] = useState([]);
    const userData = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    function loginUser(event) {
        event.preventDefault()
        const newLoginErrors = [];
        if(userData.filter(x => x.email === email).length === 0 || userData.filter(x => x.password === password).length === 0){
            newLoginErrors.push('Neteisingas vartotojo vardas arba slaptazodis');
        } 
        else {
            navigate('/content');
        }
    
        setLoginErrors(newLoginErrors);
    }

    return (
        <div className={style.loginPage}>
            <h2>Log in to your account</h2>
            <div className={`${style.error} ${loginErrors.length ? style.show : ''}`}>
                {loginErrors.map(err => <p>{err}</p>)}
            </div>
            <form className={style.form}>
                <div className={style.row}>
                    <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
                </div>
                <div className={style.row}>
                    <input onChange={updatePassword} value={password} id='password' type='password' placeholder='Password' />
                </div>
            
            </form>

            <button onClick={loginUser} type="submit" className={button.button} >Login</button>
            <p>or</p>
            <Button buttonTo="/register" title="Register"/>
        </div>
    );
  }