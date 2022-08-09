import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import SignIn from './components/SignIn/SignIn';
import Create from './components/Create';
import Details from './components/Details';


// import GameCatalog from './components/GameCatalog/GameCatalog';
// import CreateGame from './components/CreateGame';
// import Login from './components/Login';
// import Register from './components/Register';
// import ErrorPage from './components/ErrorPage';
// import GameDetails from './components/GameDetails';

function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Switch>
                    <Route path="/" exact component={Home} />

                    <Route path="/home" exact component={Home} />
                    <Route path="/catalog" exact component={Catalog} />
                    <Route path="/login" component={SignIn} />
                    <Route path="/create" component={Create} />
                    
                    <Route path="/details" component={Details} />
                    {/*<Route path="/custom">
                        <h2>Custom Page</h2>
                        <p>dasklfjasldf </p>
                    </Route>
                    <Route path="/logout" render={(props) => {
                        console.log('Logged Out!!!');

                        return <Redirect to="/" />
                    }} /> */}
                </Switch>
            </main>

        </div>
    );
}

export default App;
