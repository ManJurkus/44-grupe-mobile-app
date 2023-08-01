import style from './App.module.css';
import { Home } from './pages/Home';
import { Feature } from "./pages/Feature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Content } from './pages/Content';
import { Page404 } from './pages/Page404';

function App() {
  const dataFeature = [
    {
      id:1,
      title:'Simas is a Winner',
      text: 'Winner winner chiken dinner',
      buttonTitle: 'Continue',
      buttonTo: '/feature2',
      buttonType: 'text',
      pathName: '/feature1',
      icon: 'mentor4.JPG',
    },
    {
      id:2,
      title:'Simas like to SLEEP',
      text: 'He dreams of starting an Olympic napping team!',
      buttonTitle: 'Continue',
      buttonTo: '/feature3',
      buttonType: 'text',
      pathName: '/feature2',
      icon: 'mentor3.jpg',
    },
    {
      id:3,
      title:'Simas have a good HAIRCUT',
      text: 'For stong MAN not a problem be bold',
      buttonTitle: 'Register',
      buttonTo: '/register',
      buttonType: 'text',
      pathName: '/feature3',
      icon: 'mentor1.JPG'

    }
  ];

  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home />} />
          ({dataFeature.map(dataObj => <Route key={dataObj.id} path={dataObj.pathName} element= {<Feature data={dataObj}/>} />) })
          <Route path="/register" element={ <Register />} />
          <Route path="/login" element={ <Login /> } />
          <Route path="/content" element={ <Content /> } />
          <Route path="*" element= { <Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
