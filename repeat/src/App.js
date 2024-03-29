import './App.css';
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
            <Route path='/book-demo' element={<BookForm/>}/>
            <Route path='/get-started' element={<StartForm/>}/>
            <Route path='/goals' element={<Goals/>}/>
            <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>

  );
}

export default App;
