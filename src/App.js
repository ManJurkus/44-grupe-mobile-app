import style from './App.module.css';
import { Home } from './pages/Home';
import { Feature } from "./pages/Feature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GiStrongMan } from 'react-icons/gi';
import { GiBrain } from 'react-icons/gi';
import { FaTransgender } from 'react-icons/fa';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Content } from './pages/Content';

function App() {
  const dataFeature = [
    {
      id:1,
      title:'Simas is Winer',
      text: 'Winer winer chiken dinner',
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
        </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
