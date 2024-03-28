import logo from './logo.svg';
import './App.css';
import { CustomerMoment } from './components/CustomerMoment';
import { Footer } from './components/Footer';
import { BookForm } from './components/BookForm';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { StartForm } from './components/StartForm';
import Goals from './pages/Goals';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>

          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>

          <Routes>
            <Route path='/book-demo' element={<BookForm/>}/>
          </Routes>

          <Routes>
            <Route path='/get-started' element={<StartForm/>}/>
          </Routes>

          <Routes>
            <Route path='/goals' element={<Goals/>}/>
          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>

  );
}

export default App;
