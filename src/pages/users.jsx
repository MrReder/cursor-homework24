import { User } from '../components/user-template';
import { useSelector } from 'react-redux';

export const Users = () => {
    const users = useSelector(state => state.usersList);
    return (
        <div className="App">
            {users.map((user, index) => <User {...user} key={index} />)}
        </div>
    )
};