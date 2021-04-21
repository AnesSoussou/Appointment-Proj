import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClient } from '../actions/authActions';

const ClientAdd = ({ history }) => {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        adress: "",
        phone: "",
        category: "",
    });
    const [errors, setErrors] = useState(null);

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (auth.isAuth) {
            history.push('/addSuccess');
        }
        if (auth.error) {
            setErrors(auth.error);
        }
    }, [auth.isAuth, auth.error]);
    const handleChange = e => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const addNow = (e) => {
        e.preventDefault()
        dispatch(addClient(info))
    }

    return (<form onSubmit={addNow}>
        <div>
            <label>Clientname</label>
            <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
            <label>Adress</label>
            <input type="text" name="adress" onChange={handleChange} />
        </div>
        <div>
            <label>Phone</label>
            <input type="text" name="phone" onChange={handleChange} />
        </div>

        <div>
            <label>Category</label>
            <input type="text" name="category" onChange={handleChange} />
        </div>
        {errors && errors.map((el) => <h1>{el.msg}</h1>)}
        <button type="submit">ADDING</button>
    </form>

    )
};


export default ClientAdd;

