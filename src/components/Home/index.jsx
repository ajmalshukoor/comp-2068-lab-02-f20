import React from 'react';
// You need to import your shared header...
import Header from '../shared/Header';
import Link from '../shared/Link'

const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      {/* You need a link to your about page as a call to action */}
      <Header title="Hello! Welcome to Ajmal's React app."/>
      <Link label = "Click here to know about me..." link="/About" />
    </>
  );
}
 
export default Home;