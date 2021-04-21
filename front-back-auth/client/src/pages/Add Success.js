import React, { useEffect } from 'react';
import { loadUser } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const AddSuccess = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <div>
            <h1>Client Added Successfully</h1>
            {auth.user && <p>Hello {auth.user.firstname}</p>}
        </div>
    )

}


export default AddSuccess;