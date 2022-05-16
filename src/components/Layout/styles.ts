import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  border-left: 1px solid #C4C4C4;
  border-right: 1px solid #C4C4C4;
  height: 100vh;

  margin: 0 auto;

  width: 100%;
  max-width: 1024px;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const Github = styled.div`
position: absolute;
bottom: 0;
margin-bottom: 50px;
`;
