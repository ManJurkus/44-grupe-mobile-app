import { Burger } from '../components/Burger';
import style from './Content.module.css';

export function Content() {
    return (
        <div className={style.contentPage}>
          <header> 
            <img  className={style.logo} src="./img/logo.png" alt="Simas Logo" />
            <Burger />
          </header>
          <h2>Cia as Simas</h2>
          <img  className={style.img} src="./img/mentor5.JPG" alt="Simas" />
        </div>
    );
  }