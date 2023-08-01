import style from './Page404.module.css';
import { Button } from '../components/Button';


export function Page404() {

    return (
        <div className={style.Page404}>
          <img className={style.img} src={`../img/page404.png`} alt="" />
          
          <Button buttonTo="/" title="Back to main page" />
        </div>
    );
  }