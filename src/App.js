import Nav from './Components/nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './Components/rout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Rout />
      </BrowserRouter>
    </>
  );
}

export default App;
