import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../utils/queries';
import Posts from '../Components/Posts';

const PostList = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_COMMENTS);

    const comments = data?.comments || [];
    console.log(comments);
  
    return (
        <main>
        <div className="flex-row justify-space-between">
          <div className="col-12 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Posts comments={comments} title="Current Posts:" />
            )}
          </div>
        </div>
      </main>
    );
  };

  export default PostList;