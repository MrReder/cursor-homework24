import './App.css';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header-class">
          <Navigation />
        </header>
        <main className="main-content">
          <Switch>
            {
              AppRoutes.map(route => (
                <Route {...route} key={route.toString()}>
                  {route.component}
                </Route>
              ))
            }
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
