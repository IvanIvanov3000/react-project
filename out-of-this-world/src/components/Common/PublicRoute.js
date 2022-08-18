import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function PublicRoute({ component: Component, ...rest }) {
    const { user } = useAuthContext();


    return (
        <Route
            {...rest}
            render={(routeProps) => {
                console.log(routeProps)
                return !user.email ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to="/profile" />
                );

            }}
        />
    );
}

export default PublicRoute;