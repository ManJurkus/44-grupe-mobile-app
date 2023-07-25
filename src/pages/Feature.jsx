import { Button } from '../components/Button';
import style from './Feature.module.css';
import { BiCircle } from 'react-icons/bi';


export function Feature({title, text}) {
    return (
        <div className={style.featurePage}>
          <img className={style.img} src='./img/logo.jpg' alt='Imagine' />
          <h2>{title}</h2>
          <p>{text}</p>
          <BiCircle />
          <Button title="Continue" />
        </div>
    );
  }


