import React, { useEffect, useState } from 'react'
import { PostType } from '../../utils/Types';
import { CardGroup } from '@trussworks/react-uswds';
import Post from './Post';

function PostGroup() {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(()=>{
        fetch(`http://localhost:8282/posts`)
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
    console.log(posts)
    return (
        <CardGroup>
            {posts.map((postData, index) => (
                <Post key={index} postData={postData} />
            ))}
        </CardGroup>
    )
}

export default PostGroup