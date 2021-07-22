import { ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from  'react-router-dom';
import { ApolloClient } from '@apollo/client';
import {AskWayne} from '../../client/src/Components/Ask-Wayne/index'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql'
// });


function App() {
  return (
    <ApolloProvider client={client}>
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout fixedHeader className= "header-color">
      
        <Header title={<Link to="/" className="homeLink"><span><span style={{ color: '#ddd' }}>The / </span><strong>Social Networker</strong></span></Link>}>
            <Navigation>
                <Link to="/media">Media</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/sketchpad">Sketch Pad</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" component={AskWayne}>Ask Wayne</Link>
            </Navigation>
        </Header>
        <Drawer title="Social Networker">
            <Navigation>
            <Link to="/media">Media</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/sketchpad">Sketch Pad</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" component={AskWayne}>Ask Wayne</Link>
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
