import { useParams } from 'react-router-dom';
 
const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="container mt-4">
      <h2>Welcome to post: {id}</h2>
    </div>
  );
};