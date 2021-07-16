import React from 'react';
import About from './components/Posts';
import Nav from './components/Nav';
// import Footer from './components/Footer';


function App() {

  return (
    <div style= {{width: '100%', margin: 'auto'}}>
        <Nav></Nav>
      <main>
        <About></About>
      </main>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;