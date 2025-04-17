import React from 'react';
import { useLoaderData } from 'react-router';
import Pst from '../Pst/Pst';



const Posts = () => {

    const posts=useLoaderData();

    console.log(posts)

    return (
        <div>
            <h1>These are my posts:{posts.length}</h1>
            <div>
                {
                    posts.map(post=> <Pst key={post.id}   post={post}></Pst>)
                }
                
            </div>
        </div>
    );
};

export default Posts;