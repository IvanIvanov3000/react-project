import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuthContext } from '../contexts/AuthContext';

const Logout = () => {
    const { logout } = useAuthContext();
    let historyHook = useHistory();

    useEffect(() => {
        logout();
        historyHook.push('/home');
    }, [logout, historyHook])

    return null;
};

export default Logout;