import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Toolbar from './Components/UI/Toolbar/Toolbar';

const App = () => {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="mt-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={(<h1>Not found</h1>)}/>
        </Routes>
      </main>

    </>
  );
};

export default App;
