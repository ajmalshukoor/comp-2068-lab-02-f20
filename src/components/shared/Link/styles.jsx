import styled from 'styled-components';

export default {
    Link: styled.button` 
      font-family: 'Montserrat', sans-serif;
      margin: 5em;
      margin-left: 40%;
      margin-right:40%;
      text-align: center;
      border-radius: 6px;
      background-color:#f1c40f;
      color: #2c3e50;
        a{
          border: none;
          background-color:#f1c40f;
          color: #2c3e50;
          &:hover{
              color: white;
              background:none;
          }
        }

      `
}