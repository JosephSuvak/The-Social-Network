import React from 'react';
//import LandingPage from '../Landing';
//import Posts from '../Posts';
import Whiteboard from '../Whiteboard';
//import Tips from '../Tips';
import { Switch, Route } from 'react-router-dom';
import TimeTracker from '../TimeTracker';
import PostList from '../../pages/PostList';
import AddPost from '../AddPost';
import Welcome from '../Landing';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/posts" component={PostList} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/whiteboard" component={Whiteboard} />
        <Route path="/timetracker" component={TimeTracker} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Switch>
)

export default Main;