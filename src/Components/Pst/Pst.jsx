import React from 'react';
import { Link, useNavigate } from 'react-router';

const Pst = ({post}) => {

    const {id,title}=post;

    const navigate=useNavigate();

    const handleNavgate=()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div style={{border: '2px solid gray'}}>

            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button>Show details</button>
            </Link>
            <button onClick={handleNavgate}>Details of:{id}</button>
            
        </div>
    );
};

export default Pst;