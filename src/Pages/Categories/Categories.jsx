import { useEffect, useState } from 'react'
import axios from "axios";

//useParams
import { Link, useParams } from 'react-router-dom';

import './categories.css'
import CardDetail from '../../Components/CardDetail/CardDetail';

const Categories = () => {
  const [chars, setChars] = useState ([]);
  
  let {categoryId} = useParams();

  let filteredCharacters = chars.filter((char) => {
    return char.species === categoryId;
  });

  useEffect(() => {

    axios (`${import.meta.env.VITE_APP_BASE_URL}`).then(json =>
     setChars(json.data.results));

  //  fetch("https://hp-api.onrender.com/api/characters")
  //  .then((response) => response.json())
  //  .then((json) => console.log(json));
  }, []);
  
   return (
    <>
      <div className='cardlist'>
          {filteredCharacters.map((char) => {
            return (
                <div className='carditem'  key={char.id}>
                  <Link to={`/detailpage/${char.id}`}>
                  <CardDetail char={char}/>
                  </Link>
                </div>
            )
          })}
      </div>
    </>  
  )
}

export default Categories