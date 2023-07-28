import { Button } from '../components/Button';
import style from './Feature.module.css';
import { BiCircle } from 'react-icons/bi';


export function Feature({data, dataFeatureLength}) {

  console.log(dataFeatureLength);

    // function bubbleAll({data}) {
    //   const bubbleDiv = data.map((item, index) => <BiCircle key={index} />);
    //   console.log(bubbleDiv);
    //   return <div className={style.bubble} >{bubbleDiv}</div>;
    // }
    // function bubbleAll({dataFeatureLength}) {
    //   const bubbleDiv = (<BiCircle />);
    //   console.log(bubbleDiv);
    //   return <div className={style.bubble} >{bubbleDiv}</div>;
    // }
  

  

    return (
        <div className={style.featurePage}>
          {/* <div >{data.icon}</div> */}
          <img className={style.img} src={`../img/${data.icon}`} alt="" />
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <div className={style.bubble}>
          <BiCircle />
          <BiCircle />
          <BiCircle />

          </div>
          <Button buttonTo={data.buttonTo} title={data.buttonTitle} />
        </div>
    );
  }


