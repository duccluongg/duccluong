import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import ProductList from './features/ProductList/ProductList';
import ProductDetail from './features/ProductDetail/ProductDetail';
import Login from './features/Auth/Login/Login';
import Register from './features/Auth/Register/Register';
import Profile from './features/Profile/Profile';
import ListOrder from './features/ListOrder/ListOrder';
import Cart from './features/Cart/Cart';
import CheckOut from './features/CheckOut/CheckOut';
import ScrollToTop from './constants/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Switch>
        <ScrollToTop>
          <Route path="/listOrder" exact component={ListOrder} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Login" exact component={Login} />
          <Route path="/checkout" exact component={CheckOut} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/ProductDetail/:id" exact component={ProductDetail} />
          <Route path="/ProductList/:id" exact component={ProductList} />
          <Route path="/" exact component={Home} />
        </ScrollToTop>
      </Switch>
    </div>
  );
}

export default App;
