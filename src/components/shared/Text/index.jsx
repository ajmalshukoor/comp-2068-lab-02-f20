import React from 'react';
import Styles from './styles';

const Text = ({text}) => {

  return (
    <>
    <Styles.Text>
      <p>{text}</p>
    </Styles.Text>
    </>
  );
}
 
export default Text;