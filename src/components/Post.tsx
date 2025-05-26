import React from 'react'
import PostDetails from './PostDetails'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Post() {
    const posts = [{ id: 1, title: 'Sample Post', content: 'This is a sample post content.', likes: 0 },
        { id: 2, title: 'Another Post', content: 'This is another post content.', likes: 0 },
        { id: 3, title: 'Third Post', content: 'This is the third post content.', likes: 0 }
    ];
    const [likes, setLikes] = useState(0);

    const incrementLikes = () => {
        setLikes(likes + 1)
    }
    const postHandler = () => {
        console.log('New Post Button Clicked');
    
    }

    useEffect(() => {
        // Fetch posts from the backend
        axios.get('http://localhost:3000/posts')
            .then(response => {
                console.log(response.data);
                // Update the posts state with fetched data
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

  return (
    <div>
      <h1>Post Page</h1>
      {
        posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <button onClick={incrementLikes}>Like {post.likes}</button>
            </div>
        ))
      }
      <button className='btn-btn-primary' onClick={postHandler}>New Post</button>
      
      <PostDetails />
    </div>
  )
}
