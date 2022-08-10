import { Route, Switch, Redirect } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog';
import SignIn from './components/SignIn';
import Create from './components/Create';
import Details from './components/Details';
import Blog from './components/Blog/Blog';


import './App.css'
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

            <AuthProvider>
                <ParallaxProvider>
                    <main id="main-content">
                        <Switch>
                            <Route path="/" exact component={Home} />

                            <Route path="/home" exact component={Home} />
                            <Route path="/catalog" exact component={Catalog} />
                            <Route path="/login" component={SignIn} />
                            <Route path="/create" component={Create} />

                            <Route path="/details" component={Details} />
                            <Route path="/blog" component={Blog} />

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
                </ParallaxProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
