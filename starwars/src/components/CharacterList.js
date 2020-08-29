import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./Character";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/`)
        //birth_year, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, created, edited, species, starships, url, vehicles
        .then(res => {
            console.log("Res data : ", res.data.results);
            console.log("res data objects", res.data);
            setCharacters(res.data.results);
        })
        .catch(err =>{ 
            console.log("Err msg :", err);
        });

    },[]);

    return(
        <div className = "CharacterData">
            {
                characters.map((character, index) => {
                    return (
                        <Character 
                        key = {index}
                        name = {character.name}
                        birthyear = {character.birth_year}
                        gender = {character.gender}
                        mass = {character.mass}
                        height = {character.height}
                        />
                    );
                })
            }
        </div>
    )
}