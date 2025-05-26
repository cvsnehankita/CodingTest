import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = (event.target as HTMLFormElement).elements.namedItem('title') as HTMLInputElement;
    const content = (event.target as HTMLFormElement).elements.namedItem('content') as HTMLTextAreaElement;
    const newPost = {
        title: title.value,
        content: content.value,
        id: Math.floor(Math.random() * 1000),
        likes: 0
    };
    axios.post('http://localhost:80/post', newPost)
        .then(response => {
            console.log('Post created:', response.data);
        }
        )
        .catch(error => {
            console.error('Error creating post:', error);
        });

    // Reset the form
    title.value = '';
    content.value = '';
    }

export default function NewPost() {
  const navigate = useNavigate();
  return (
    <div>
         <button className='btn btn-secondary' onClick={() => navigate('/post')}>Back</button>
      <h1>New Post</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Enter title" />
            </div>
            <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea className="form-control" id="content" rows={3} placeholder="Enter content"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>       
        </form>
    </div>
  )
}
