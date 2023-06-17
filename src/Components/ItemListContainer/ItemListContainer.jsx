import React, {useState, useEffect} from 'react';
import axios from "axios";
import './itemlistcontainer.css';
import CardDetail from '../CardDetail/CardDetail';

// React Router Dom

import { Link } from 'react-router-dom';

// console.log(import.meta.env.VITE_APP_BASE_URL);

const ItemListContainer = () => {
  const [chars, setChars] = useState ([]);

  useEffect(() => {

    axios (`${import.meta.env.VITE_APP_BASE_URL}`).then(json =>
     setChars(json.data.results))

  //  fetch("https://hp-api.onrender.com/api/characters")
  //  .then((response) => response.json())
  //  .then((json) => console.log(json));
  }, []);
  
  return (
    <div className='cardlist'>
        {chars.map((char) => {
          return (
            <div className='carditem'  key={char.id}>
              <Link to={`/detailpage/${char.id}`}>
              <CardDetail char={char}/>
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default ItemListContainer