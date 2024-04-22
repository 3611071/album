import './App.css';
import Main from './pages/main/main';
import { albumData } from './data'
import { albumData2 } from './data2'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photo from './pages/photo/photo';

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
      <Route path='/al1' element = {<Main data={albumData}/>}/>
      <Route path='/al2' element = {<Main data={albumData2}/>}/>
      <Route path='al1/:id' element = {<Photo data={albumData} home="/al1"/>} />
      <Route path='al2/:id' element = {<Photo data={albumData2} home="/al2"/>} />
      </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
