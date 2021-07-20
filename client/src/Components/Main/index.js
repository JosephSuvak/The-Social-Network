import React from 'react';
import LandingPage from '../Landing';
import Posts from '../PostsCards';
import Whiteboard from '../Whiteboard';
//import Tips from '../Tips';
import { Switch, Route } from 'react-router-dom';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import PostList from '../../pages/PostList';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/media" component={Posts} />
        <Route path="/posts" component={PostList} />
        <Route path="/whiteboard" component={Whiteboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Switch>
)

export default Main;