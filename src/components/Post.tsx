import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import type { Post } from '../components/PostEntity';
import { useNavigate } from 'react-router-dom';


export default function Post() {
    // const posts = [{ id: 1, title: 'Sample Post', content: 'This is a sample post content.', likes: 0 },
    //     { id: 2, title: 'Another Post', content: 'This is another post content.', likes: 0 },
    //     { id: 3, title: 'Third Post', content: 'This is the third post content.', likes: 0 }
    // ];
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        // Fetch posts from the backend
        axios.get('http://localhost:80/post')
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    const postHandler = () => { navigate('/newpost'); };

    const incrementLikes = (id: number) => {
        // Find the post to get its current likes
        const post = posts.find(p => p.id === id);
        if (!post) {
          console.error(`Post with id ${id} not found.`);
          return;
        }
      
        const updatedLikes = post.likes + 1;
        setPosts(prevPosts =>
          prevPosts.map(p =>
            p.id === id ? { ...p, likes: updatedLikes } : p
          )
        );
        axios.patch(`http://localhost:80/post/${id}`, { likes: updatedLikes })
          .then(response => {
            console.log('Likes updated:', response.data);
          })
          .catch(error => {
            console.error('Error updating likes:', error);
            // Optionally, revert the optimistic update if the request fails
            setPosts(prevPosts =>
              prevPosts.map(p =>
                p.id === id ? { ...p, likes: p.likes } : p
              )
            );
          });
      };

  return (
    <div>
      <h1>Post Details 
        <button className='btn btn-primary' onClick={postHandler}>New Post</button></h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Likes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {posts.map((post) => (
                <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>{post.likes}</td>
                    <td>
                    <button onClick={() => incrementLikes(post.id)}>Like</button>
                    </td>
                </tr>
                ))}
                </tbody>
        </table>
    </div>  
  )
}
