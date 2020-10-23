import React from 'react';
import { Button } from 'react-bootstrap';
import Styles from './styles';


const Link = ({label,link}) => {

    return(
        <>
        <Styles.Link>
         <Button href={link}>{label}</Button>
        </Styles.Link> 
        </>       
    );   
};

export default Link;