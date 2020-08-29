// Write your Character component here
import React from "react";
import styled from "styled-components";

const NameStyle = styled.h1`
font-size: 2rem;
background-color : pink;

`

const Character = (props) => {
    return(
        <div className = "starwars-characters">
            <NameStyle>
            <h1>{props.name}</h1>
            </NameStyle>
            <div className = "characters-info">
                <p>{props.birthyear}</p>
                <p>{props.gender}</p>
                <p>{props.height}</p>
                <p>{props.mass}</p>
            </div>
        </div>
    )
}

export default Character;