import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function GuardRoute({ component: Component, ...rest }) {
    const { user } = useAuthContext();


    return (
        <Route
            {...rest}
            render={(routeProps) => {
                console.log(routeProps)
                return user.email ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to="/login" />
                );

            }}
        />
    );
}

export default GuardRoute;