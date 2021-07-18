import React from 'react';
import Posts from './components/Posts';
import Nav from './components/Nav';
import Grid from '@material-ui/core/Grid'

// import Footer from './components/Footer';


function App() {

  return (
    <div style= {{width: '100%', margin: 'auto'}}>
        <Nav></Nav>
      <main>
        <Grid>
        <Posts></Posts>
        </Grid>
      </main>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;