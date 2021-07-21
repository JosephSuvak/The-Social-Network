import React from 'react';
import Posts from '../Components/Posts';
import AddPost from '../Components/AddPost';
import FriendList from '../Components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_COMMENTS, QUERY_ME_BASIC } from '../utils/queries';
//import Projects from '../Components/PostsCards';

const PostList = () => {
  const { loading, data } = useQuery(QUERY_COMMENTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const comments = data?.comments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <AddPost />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Posts comments={comments} title="Posts..." />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default PostList;