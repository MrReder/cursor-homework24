import { User } from '../components/user-template';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store';
import { useState } from 'react';
import axios from 'axios';


export const Users = () => {
    const users = useSelector(state => state.usersList);
    const loadedUsers = useSelector(state => state.loadedUsers);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleGetUsers = () => {
        const loadedUsersData = {
            name: setName,
            username: setUsername,
            avatar: setAvatar
        }
        dispatch(getUsers(loadedUsersData));
    }

    return (
        <div className="App">
            <button onClick={handleGetUsers}>Load users from server</button>
            {users.map((user, index) => <User {...user} key={index} />)}
            {loadedUsers.map((user) => <User {...user} key={user.id} />)}
        </div>
    )
};