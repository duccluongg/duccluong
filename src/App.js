import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import ProductList from './features/ProductList/ProductList';
import ProductDetail from './features/ProductDetail/ProductDetail';
import Login from './features/Auth/Login/Login';
import Register from './features/Auth/Register/Register';
import Profile from './features/Profile/Profile';
import ListOrder from './features/ListOrder/ListOrder';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/listOrder" exact component={ListOrder} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Login" exact component={Login} />
        <Route path="/ProductDetail/:id" exact component={ProductDetail} />
        <Route path="/ProductList/:id" exact component={ProductList} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
