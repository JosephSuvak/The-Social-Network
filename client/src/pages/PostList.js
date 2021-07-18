import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../utils/queries';
import CommentList from '../Components/CommentList';

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
              <CommentList comments={comments} title="A list of current posts..." />
            )}
          </div>
        </div>
      </main>
    );
  };

  export default PostList;