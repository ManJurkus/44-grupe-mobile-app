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
  

console.log(dataFeature);

  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home />} />
          ({dataFeature.map(dataObj => <Route key={dataObj.id} path={dataObj.pathName} element= {<Feature data={dataObj}/>} />) })
        </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
