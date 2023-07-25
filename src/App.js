import style from './App.module.css';
import { Home } from './pages/Home';
import { Feature } from "./pages/Feature"

function App() {
  const dataFeature = [
    {
      id:1,
      title:'Feature-1',
      text: 'Feature-1 Lorem ipsum dolor sit, amet consectetur adipisicing.'
    },
    {
      id:2,
      title:'Feature-2',
      text: 'Feature-2 Lorem ipsum dolor sit, amet consectetur adipisicing.'
    },
    {
      id:3,
      title:'Feature-3',
      text: 'Feature-3 Lorem ipsum dolor sit, amet consectetur adipisicing.'
    }
  ];
  
  let needBubbleCount = 0;
  for (const index in dataFeature){
    needBubbleCount++;
  }
  console.log(needBubbleCount);


  return (
    
    <div className={style.app}>
      <Home />
      <Feature title='Feature-1' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />
      <Feature title='Feature-2' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />
      <Feature title='Feature-3' text='Lorem ipsum dolor sit, amet consectetur adipisicing.' />
 
    </div>
  );
}

export default App;
