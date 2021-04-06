import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/authActions';

const Register = ({ history }) => {
    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        role: "",
    });
    const [errors, setErrors] = useState(null);

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (auth.isAuth) {
            history.push('/feed');
        }
        if (auth.error) {
            setErrors(auth.error);


        }
    }, [auth.isAuth, auth.error]);
    const handleChange = e => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const registerNow = (e) => {
        e.preventDefault()
        dispatch(registerUser(info))
    }
    return (<form onSubmit={registerNow}>
        <div>
            <label>Firstname</label>
            <input type="text" name="firstname" onChange={handleChange} />
        </div>
        <div>
            <label>Lastname</label>
            <input type="text" name="lastname" onChange={handleChange} />
        </div>
        <div>
            <label>Phone</label>
            <input type="text" name="phone" onChange={handleChange} />
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
        </div>
        <div>
            <label>Role</label>
            <input type="text" name="role" onChange={handleChange} />
        </div>
        {errors && errors.map((el) => <h1>{el.msg}</h1>)}
        <button type="submit">Register</button>
    </form>

    )
};


export default Register;
