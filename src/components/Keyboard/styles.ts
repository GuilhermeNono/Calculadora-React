import styled from 'styled-components';

export const Container = styled.div`
  height: calc(668px - (0.25*668px));
  width: 100%;
  /* background: blue; */
`;

export const Keys = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
width: 100%;
height: 100%;
text-align: center;

`;
export const  Key = styled.div`
border: 1px solid red;


`;

