import Nav from './Components/nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './Components/rout';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Rout />
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
