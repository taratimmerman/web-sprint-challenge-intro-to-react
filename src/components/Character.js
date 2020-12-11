// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(info) {
    return (
        <StyledChar className='character'>
            <h2>{info.character.name}</h2>
            <h2>{info.character.species}</h2>
        </StyledChar>
    );
}

const StyledChar = styled.div`
    display: flex;
`