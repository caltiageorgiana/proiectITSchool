import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Tesla from './components/Tesla/Tesla';
import Apple from './components/Apple/Apple';
import Amazon from './components/Amazon/Amazon';
import Favorite from './components/Favorite/Favorite';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/tesla' element={<Tesla/>}/>
          <Route path='/apple' element={<Apple/>}/>
          <Route path='/amazon' element={<Amazon/>}/>
          <Route path='/article-details/:id' element={<ArticleDetails/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
