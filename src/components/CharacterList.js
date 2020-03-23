import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { ListGroup, ListGroupItem } from 'reactstrap';
  // TODO: Add useState to track data from useEffect
  
  
  
  export default function CharacterList() {
    const [charList, setCharList] = useState([]);

  // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      console.log(res.data.results)
      setCharList(res.data.results)
    })
  }, []);
  const renderData = () => {
    return charList.map(char => {
        return (
          <div key = {char.id} >
            <ListGroupItem>{char.name}</ListGroupItem>
             <ListGroupItem>{char.id}</ListGroupItem> 
          </div>
        )

    })
}
  return (

    
    <section className="character-list">
      {renderData()}
    </section>
  );
}
