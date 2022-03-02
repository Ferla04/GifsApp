import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';


function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <h2>Gifs React</h2>
        <Link to='/gif/colombia'>Gifs de Colombia</Link>
        <Link to='/gif/ecuador'>Gifs de Ecuador</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
        <Route path='/gif/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  );
}

export default App;
