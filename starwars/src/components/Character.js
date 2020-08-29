// Write your Character component here
import React from "react";
import styled from "styled-components";
import {PaginationLink} from "reactstrap";

const NameStyle = styled.div`
font-size: 2rem;
background-color : pink;

`
const CharacterCard = styled.div`
display:flex;
flex-direction: column;
align-items: center;
border:1px solid red; 
`
const CharacterInfo = styled.div`
color: aqua; 
font-size: 1.5rem;
`
const Character = (props) => {
    return(
        <CharacterCard>
            <NameStyle>
            <h1>{props.name}</h1>
            </NameStyle>
            <CharacterInfo>
                <p>Birth Date: {props.birthyear}</p>
                <p>Gender:  {props.gender}</p>
                <p>Height: {props.height} cm</p>
                <p>Weight:{props.mass} kg</p>
            </CharacterInfo>
            </CharacterCard>
            
    )
}

export default Character;