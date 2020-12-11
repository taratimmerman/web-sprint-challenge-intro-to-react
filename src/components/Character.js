// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(info) {
    return (
        <StyledChar className='character'>
            <StyledImg src={info.character.image} alt={info.character.name}/>
            <StyledH2>{info.character.name}</StyledH2>
            <StyledH3>{info.character.species}</StyledH3>
        </StyledChar>
    );
}

const StyledChar = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    background-color:rgba(16, 34, 28, .9);
    border-radius: 5px;
    border: #95b57d 1px solid;
    color: #e4e551;
    margin: 10px auto;
`

const StyledH2 = styled.h2`
    padding: 20px;
`
const StyledH3 = styled.h3`
    padding: 20px;
`
const StyledImg = styled.img`
    padding: 5px;
    width: 15%;
`