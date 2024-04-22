import './App.css';
import Main from './pages/main/main';
import { albumData } from './data'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photo from './pages/photo/photo';

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
      <Route path='/' element = {<Main data={albumData}/>}/>
      <Route path='/:id' element = {<Photo data={albumData}/>} />
      </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
