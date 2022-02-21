import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './features/Home/Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
