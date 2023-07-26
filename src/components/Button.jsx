import style from './Button.module.css';
import { Link } from 'react-router-dom';

export function Button({title, buttonTo}) {
    return (
            <Link className={style.button} to={buttonTo}>{title}</Link>
    );
  }