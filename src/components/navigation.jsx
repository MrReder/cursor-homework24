import { Link } from "react-router-dom";

const links = [
    {
        to: '/cursor-homework24/',
        label: 'Home'
    },
    {
        to: '/cursor-homework24/users',
        label: 'Users'
    },
    {
        to: '/cursor-homework24/add-user',
        label: 'Add User'
    }
];

export const Navigation = () => (
    <nav className="navigation">
        <div className="navigation">
            {links.map(link => (
                <p key={link.to} className="navigation-item">
                    <Link to={link.to}>{link.label}</Link>
                </p>
            ))}
        </div>
    </nav>
);