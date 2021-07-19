import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from  'react-router-dom';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout fixedHeader className= "header-color">
      
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
        <Content >
          <div className="page-content" />
          <Main />
        </Content>
    </Layout> 
</div>
</ApolloProvider>
  );
}

export default App;
