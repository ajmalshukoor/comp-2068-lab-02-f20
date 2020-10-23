import React from 'react';
import Header from '../shared/Header';
import Text from '../shared/Text';

const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      {/* You need a paragraph describing a fun fact about you */}
      <Header title="About"/>
      <Text text="I don't read, I rarely watch movies, I don't play games, I don't spend too much time on studies, but i don't get enough time for anything!!!"/>
    </>
  );
}
 
export default Home;