import { Button } from '../components/Button';
import style from './Register.module.css';
import { useState, useEffect } from 'react';
import button from '../components/Button.module.css';

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
    const [isRegistred, setIsRegistred] = useState(false);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    function updateName(event) {
        setName(event.target.value);
    }

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    function updateCheck() {
        setCheck(!check);
    }

    function updateIsRegistred() {
        setIsRegistred(!isRegistred);
    }

    function registerUser(event) {
        const minUsernameLength = 3;
        const maxUsernameLength = 20;
        const minPasswordLength = 6;
        const maxPasswordLength = 100;
        event.preventDefault();
        const newErrors = [];
        

        if (name.length < minUsernameLength || name.length > maxUsernameLength) {
            newErrors.push('klaida: name...');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('klaida: password...');
        }

        if (!email.includes('@') ) {
            newErrors.push('klaida: email...');
        }

        if ( check === false ) {
            newErrors.push('klaida: taisykles...');
        }
        
        if(users.filter(x => x.name === name).length > 0 || users.filter(x => x.email === email).length > 0)  {
            newErrors.push('klaida: Vartotojo vardas arba email uzregistuotas');
        }

        setErrors(newErrors);

        if (!newErrors.length) {
            updateIsRegistred()
            setUsers((prev) => [...prev, { name, email, password }]);
        }
    }



    return (
        <div className={style.registerPage}>
            <h2>Create your account ({users.length})</h2>
            <div className={`${style.error} ${errors.length ? style.show : ''}`}>
                {errors.map(err => <p key={name}>{err}</p>)}
            </div>
            <div className={`${style.registerSucsesful} ${ isRegistred ? style.showw : ''}`}>
               <p>Vartotojas Sekmingai uzregistruotas</p>
            </div>

            <form className={style.form}>
                <div className={style.row}>
                    <input onChange={updateName} value={name} id='name' type='text' placeholder='Name' />
                </div>
                <div className={style.row}>
                    <input onChange={updateEmail} value={email} id='email' type='text' placeholder='Email' />
                </div>
                <div className={style.row}>
                    <input onChange={updatePassword} value={password} id='password' type='password' placeholder='Password' />
                </div>
                <div className={style.checkboxStyle}>
                    <input onChange={updateCheck} type="checkbox" id="checkbox"></input>
                    <label htmlFor="checkbox">Agree to our TOS <link rel="stylesheet" />(read)</label>
                
                </div>
            </form>

            <button onClick={registerUser} type="submit" className={button.button} >Register</button>
            <p>or</p>
            <Button buttonTo="/login" title="Login"/>
        </div>
    );
  }