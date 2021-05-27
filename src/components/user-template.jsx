import React from 'react';

export const User = ({ name, username, avatar }) => {
    return (
        <section className="page-style">
            <div className="avatar-wrapper"><img className="avatar" src={avatar} alt=" "></img></div>
            <div className="user-wrapper">
                <h3 className="user-name">{name}</h3>
                <p className="user-nick">{username}</p>
            </div>
        </section>
    )
};

