import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
