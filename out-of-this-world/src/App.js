import { Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog';
import Blog from './components/Blog/Blog';
import SignIn from './components/SignIn';

import Create from './components/Create';
import Details from './components/Details';
import EditMovie from './components/EditMovie';

import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';

import Logout from './components/Logout';



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
            <AuthProvider>
            <Header />

            
                <ParallaxProvider>
                    <main id="main-content">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" exact component={Home} />
                            <Route path="/catalog" exact component={Catalog} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/login" component={SignIn} />


                            <Route path="/create" component={Create} />
                            <Route path="/details/:movieId" component={Details} />
                            <Route path="/edit/:movieId" component={EditMovie} />

                            <Route path="/profile" exact component={Profile} />
                            <Route path="/profile/:id/edit" component={ProfileEdit} />


                            <Route path="/logout" component={Logout} />

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
