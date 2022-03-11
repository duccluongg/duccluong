import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import ProductList from './features/ProductList/ProductList';
<<<<<<< HEAD
import ProductDetail from './features/ProductDetail/ProductDetail';
=======
>>>>>>> dd8d8b3989a0333af49e57191d50d3be83299bf4
function App() {
  return (
    <div className="App">
      <Switch>
<<<<<<< HEAD
        <Route path="/ProductDetail/:id" exact component={ProductDetail} />
=======
>>>>>>> dd8d8b3989a0333af49e57191d50d3be83299bf4
        <Route path="/ProductList/:id" exact component={ProductList} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
