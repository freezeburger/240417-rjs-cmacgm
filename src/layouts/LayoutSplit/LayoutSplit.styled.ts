import styled from 'styled-components';

export const LayoutSplitWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;

    &>aside{
        display: block;
        border:1px blue solid;
        height: 100%;
        width: 30vw;
        padding:10px;
    }

    &>main{
        display: block;
        border:3px green solid;
        height: 100%;
        width: 70vw;
        padding:10px;
    }
`;
