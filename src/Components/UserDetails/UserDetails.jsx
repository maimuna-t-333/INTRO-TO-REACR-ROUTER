import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData();

    // const params=useParams();
    // console.log(params);


    const {userID}=useParams();
    console.log(userID);
    
    const{name,website}=user;
    return (
        <div>
            <h3>User details  here</h3>
            <h2>name:{name}</h2>
            <p>Website:{website}</p>
        </div>
    );
};

export default UserDetails;