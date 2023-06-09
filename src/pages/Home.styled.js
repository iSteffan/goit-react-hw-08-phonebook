import styled from 'styled-components';

export const Greetings = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin-top: 65px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  min-width: 320px;
  height: 300px;
  background-color: rgb(40 113 171);
  border-radius: 12px;
  /* opacity: 0.5; */

  @media screen and (min-width: 480px) {
    width: 400px;
  }
`;
