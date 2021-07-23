import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from  'react-router-dom';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
//   uri: '/graphql',
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
            </Navigation>
        </Header>
        <Drawer title="Social Networker">
            <Navigation>
            <Link to="/media">Media</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/sketchpad">Sketch Pad</Link>
                <Link to="/profile">Profile</Link>
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
