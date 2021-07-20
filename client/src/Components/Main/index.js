import React from 'react';
import LandingPage from '../Landing';
import PostCards from '../PostCards';
import Whiteboard from '../Whiteboard';
//import Tips from '../Tips';
import { Switch, Route } from 'react-router-dom';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import PostList from '../../pages/PostList';
import NoMatch from '../../pages/NoMatch';
import SingleComment from '../../pages/SingleComment';
import ReactionForm from '../ReactionForm';
import ReactionList from '../ReactionList';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/media" component={PostCards} />
        <Route path="/posts" component={PostList} />
        <Route path="/whiteboard" component={Whiteboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/comment/:id" component={SingleComment} />
        <Route path="/reactionform" component={ReactionForm} />
        <Route path="/reactionlist" component={ReactionList} />

        <Route component={NoMatch} />
    </Switch>
)

export default Main;