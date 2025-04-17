import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {

    const {name,username}=use(userPromise);

    return (
        <div>
            <p><small>{name}</small></p>
            <p>{username}</p>
        </div>
    );
};

export default UserDetails2;