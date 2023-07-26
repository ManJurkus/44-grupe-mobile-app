import style from './App.module.css';
import { Home } from './pages/Home';
import { Feature } from "./pages/Feature";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dataFeature = [
    {
      id:1,
      title:'Feature-1',
      text: 'Feature-1 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Continue',
      buttonTo: '/feature2',
      pathName: '/feature1',
    },
    {
      id:2,
      title:'Feature-2',
      text: 'Feature-2 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Continue',
      buttonTo: '/feature3',
      pathName: '/feature2',
    },
    {
      id:3,
      title:'Feature-3',
      text: 'Feature-3 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Register',
      buttonTo: '/',
      pathName: '/feature3',
    }
  ];
  function featurePathCreator(){

    return dataFeature.length
  }

  console.log(featurePathCreator());
  
 


  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
        {/* { dataCards.map(cardObj => <Card key={cardObj.id} dataCards={cardObj} />) } */}
        {dataFeature.map(dataObj => <Route path={dataObj.pathName} element= {dataFeature.map(data => <Feature dataFeature={data} buttonTo={data.buttonTo} buttonTitle={data.buttonTitle} title={data.title} text={data.text} />)} />)}
        
          <Route index path="/" element={ <Home />} />
          <Route  path="/feature1" element={ <Feature dataFeature={dataFeature} buttonTo="/feature2" buttonTitle="Continue" title='Feature-1' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />} />
          <Route  path="/feature2" element={ <Feature dataFeature={dataFeature} buttonTo="/feature3" buttonTitle="Continue" title='Feature-2' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />} />
          <Route  path="/feature3" element={ <Feature dataFeature={dataFeature} buttonTo="/" buttonTitle="Register" title='Feature-3' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />} />
        </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
