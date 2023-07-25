import style from './Button.module.css';

export function Button({title}) {
    return (
            <button className={style.button} href="#">{title}</button>
    );
  }