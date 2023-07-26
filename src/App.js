import style from './App.module.css';
import { Home } from './pages/Home';
import { Feature } from "./pages/Feature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GiStrongMan } from 'react-icons/gi';
import { GiBrain } from 'react-icons/gi';
import { FaTransgender } from 'react-icons/fa';




function App() {
  const dataFeature = [
    {
      id:1,
      title:'Feature-1',
      text: 'Feature-1 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Continue',
      buttonTo: '/feature2',
      pathName: '/feature1',
      icon: <GiStrongMan />,
    },
    {
      id:2,
      title:'Feature-2',
      text: 'Feature-2 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Continue',
      buttonTo: '/feature3',
      pathName: '/feature2',
      icon: <GiBrain />,
    },
    {
      id:3,
      title:'Feature-3',
      text: 'Feature-3 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Register',
      buttonTo: '/',
      pathName: '/feature3',
      icon: <FaTransgender />,

    }
  ];
    let dataFeatureLength = dataFeature.length;

    function bubbleAll({dataFeature}) {
      const bubbleDiv = {dataFeature.map((item, index) => <BiCircle key={index} />)};
      console.log(bubbleDiv);
      return <div className={style.bubble} >{bubbleDiv}</div>;
    }

    console.log();

  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home />} />
          ({dataFeature.map(dataObj => <Route key={dataObj.id} path={dataObj.pathName} element= {<Feature dataFeatureLength={dataFeatureLength} data={dataObj}/>} />) })
        </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
