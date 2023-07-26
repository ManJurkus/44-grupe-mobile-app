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
    },
    {
      id:2,
      title:'Feature-2',
      text: 'Feature-2 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Continue',
    },
    {
      id:3,
      title:'Feature-3',
      text: 'Feature-3 Lorem ipsum dolor sit, amet consectetur adipisicing.',
      buttonTitle: 'Register',
    }
  ];
  
 


  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>

          <Route index path="/" element={ <Home />} />
          <Route  path="/feature1" element={ <Feature dataFeature={dataFeature} buttonTitle="Continue" title='Feature-1' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />} />
          <Route  path="/feature2" element={ <Feature dataFeature={dataFeature} buttonTitle="Continue" title='Feature-2' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />} />
          <Route  path="/feature3" element={ <Feature dataFeature={dataFeature} buttonTitle="Register" title='Feature-3' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />} />
        </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
