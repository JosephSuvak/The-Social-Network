import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from  'react-router-dom';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
      
        <Header title={<Link to="/" className="homeLink"><span><span style={{ color: '#ddd' }}>The / </span><strong>Social Networker</strong></span></Link>}>
            <Navigation>
                <Link to="/posts">Posts</Link>
                <Link to="/tips">Tips</Link>
                <Link to="/whiteboard">Whiteboard</Link>
                <Link to="/timetracker">Time Tracker</Link>
            </Navigation>
        </Header>
        <Drawer title="Social Networker">
            <Navigation>
                <Link to="/posts">Posts</Link>
                <Link to="/tips">Tips</Link>
                <Link to="/whiteboard">Whiteboard</Link>
                <Link to="/timetracker">Time Tracker</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
    </Layout>
</div>
</ApolloProvider>
  );
}

export default App;
