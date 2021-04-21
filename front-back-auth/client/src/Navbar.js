import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './actions/authActions';

const Navbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    return (
        <div>
            <Link to="/">Home</Link>
            {auth.isAuth ? (
                <>
                    <Link to="/profil">Profil</Link>
                    <Link onClick={() => dispatch(logoutUser())} >Log out</Link>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>

                </>
            )}
            <Link to="/addClient">ClientAdd</Link>
        </div >
    );
};

export default Navbar;
