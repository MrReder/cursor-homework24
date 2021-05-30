import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, postNewUser } from '../store';


const AddUser = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleAvatar = (e) => {
        setAvatar(e.target.value);
    }

    const handleAddUser = () => {
        const userData = {
            name: name,
            username: username,
            avatar: avatar
        }
        dispatch(postNewUser(userData));
    }

    const handleAddUserToInitial = () => {
        const userData = {
            name: name,
            username: username,
            avatar: avatar
        }
        dispatch(addUser(userData));
    }

    return (
        <div className='add-user-wrapper'>
            <input type="text" placeholder="Please input name" onChange={handleName} className='text-input'></input>
            <input type="text" placeholder="Please input username" onChange={handleUsername} className='text-input'></input>
            <input type="url" placeholder="Please paste avatar url" onChange={handleAvatar} className='url-input'></input>
            <button onClick={handleAddUser} style={{ marginBottom: 20 }}>Add user to server and initial list</button>
            <button onClick={handleAddUserToInitial}>Add user to initial list</button>
        </div>
    )
};

export default AddUser;