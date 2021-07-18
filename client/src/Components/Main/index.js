import React from 'react';
import LandingPage from '../Landing';
//import Posts from '../Posts';
import Whiteboard from '../Whiteboard';
import Tips from '../Tips';
import { Switch, Route } from 'react-router-dom';
import TimeTracker from '../TimeTracker';
import PostList from '../../pages/PostList';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/posts" component={PostList} />
        <Route path="/tips" component={Tips} />
        <Route path="/whiteboard" component={Whiteboard} />
        <Route path="/timetracker" component={TimeTracker} />
    </Switch>
)

export default Main;