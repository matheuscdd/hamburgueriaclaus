import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Outlet , Navigate } from 'react-router-dom';

export function RoutesAuth() {
    const { user } = useContext(UserContext);

    return user ? <Outlet/> : <Navigate to='/'/>
}