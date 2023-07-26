import { Button } from '../components/Button';
import style from './Feature.module.css';
import { BiCircle } from 'react-icons/bi';


export function Feature({title, text, dataFeature, buttonTitle}) {

    function bubbleAll() {
      const bubbleDiv = dataFeature.map((item, index) => <BiCircle key={index} className={isCurrentPage ? style.greenBubble : ''} />);
      console.log(bubbleDiv);
      return <div className={style.bubble} >{bubbleDiv}</div>;
    }
  

  

    return (
        <div className={style.featurePage}>
          <img className={style.img} src='./img/log.jpg' alt='Imagine' />
          <h2>{title}</h2>
          <p>{text}</p>
          {bubbleAll()}
          <Button title={buttonTitle} />
        </div>
    );
  }


