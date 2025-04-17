import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PosttDetails = () => {

    const Poost=useLoaderData();

    const navigate=useNavigate();
    return (
        <div>
            <h3>{Poost.title}</h3>
            <p>{Poost.body}</p>


            <button onClick={()=>navigate(-1)}>Go Back</button>
            
        </div>
    );
};

export default PosttDetails;