import {useState, useEffect} from 'react'
import axios from "axios";
import './detailpage.css'

//Components
import CardDetail from '../../Components/CardDetail/CardDetail';

//useParams
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const [char, setChar] = useState ({});

  let {id} = useParams();

  useEffect(() => {

    axios (`${import.meta.env.VITE_APP_BASE_URL}/${id}`).then(json =>
     setChar(json.data))

  //  fetch("https://hp-api.onrender.com/api/characters")
  //  .then((response) => response.json())
  //  .then((json) => console.log(json));
  }, [id]);

  return (
    <>
      <div className='title'>
        Detail
      </div>
      <div className='itemcontainer'>
        <CardDetail char={char}/>
      </div>
    </>
  )
}

export default DetailPage