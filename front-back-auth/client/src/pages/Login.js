import React, { useState, useEffect } from 'react';
import { loginUser } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ history }) => {
    const [info, setInfo] = useState({
        email: "",
        password: "",

    });

    const [errors, setErrors] = useState(null);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    };
    const login = e => {
        e.preventDefault()
        dispatch(loginUser(info))
    }

    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (auth.isAuth) {
            history.push('/feed');
        }
        if (auth.error) {
            setErrors(auth.error);
            setTimeout(() => {
                setErrors(null)
            },5000);


        }
    }, [auth.isAuth, auth.error]);


    return (
        <form onSubmit={login}>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={handleChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} />
            </div>
            {errors && errors.map((el) => <h1>{el.msg}</h1>)}

            <button type="submit">Login</button>
        </form>
    );

}


export default Login;