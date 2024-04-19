import styled from 'styled-components';

const colorLevels:Record<string,string> = {
    success:'green',
    primary:'cornflowerblue',
    error:'crimson',
}

export const BaseButtonWrapper = styled.button<{level:string}>`
    background-color: ${ ({level}) => colorLevels[level]  };
    border-radius: 3px;
    border: none;
    color:white;
    min-width: 100px;
    height: 45px;
    line-height: 45px;
    transform:scale(1);
    margin:3px;
    transition: scale .5s ease;
    cursor: pointer;

    &:hover{
        transform:scale(1.1); 
    }
`;
BaseButtonWrapper.defaultProps = {
    level:'primary',
    children:'Default Button Text'
}
