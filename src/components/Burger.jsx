import style from './Burger.module.css';
import { TbMenuOrder } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export function Burger() {
    const [burgerSwich, setBurgerSwich] = useState(false);

    function updateBurger(event) {
        setBurgerSwich(!burgerSwich);
    }

    
    return (
        <div className={style.burger}>
          <TbMenuOrder onClick={updateBurger} size="50px" />
          <div className={`${style.burgerMeniu} ${burgerSwich ? style.show : ''}`}>
            <Link className={style.burgerLink} to='/Something'>Something</Link>
            <Link  className={style.burgerLink} to='/Something'>Something</Link>
            <Link className={style.burgerLink} to='/Something'>Something</Link>
          </div>
        </div>
    );
  }