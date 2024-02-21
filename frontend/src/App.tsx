import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Toolbar from './Components/UI/Toolbar/Toolbar';
import Albums from './Containers/Albums/Albums';
import Tracks from './Containers/Tracks/Tracks';

const App = () => {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="mt-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/tracks" element={<Tracks/>}/>
          <Route path="*" element={(<h1>Not found</h1>)}/>
        </Routes>
      </main>

    </>
  );
};

export default App;
