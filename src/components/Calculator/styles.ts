import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

`;

export const Body = styled.div`

border-radius: 12px;
background: gray;
width: 493px;
height: 668px;
border: 2px solid gray;

`;
export const Screen = styled.div`

width: 100%;
height: 25%;
border-bottom: 1px solid black;
display: flex;
justify-content: end;
align-items: center;


> span {
    color: black;
    margin-right: 46px;
    font-size: 64px;
}
`;