import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import ProductList from './features/ProductList/ProductList';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/ProductList/:id" exact component={ProductList} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
