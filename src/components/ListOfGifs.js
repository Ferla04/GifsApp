import React, { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif'


export default function ListOfGifs({params}){

  const { keyword } = params;
  const [gifs, setGifts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    console.log('Buscando gifs');
    getGifs({ keyword }).then(infoGif=>{
      setGifts(infoGif);
      setloading(false);
    });
  }, [keyword]);

  if(loading) return <i>CARGANDO ...</i>

  return gifs.map(({id,title,url})=> 
      <Gif key={id} id={id} title={title} url={url}/>
  )
}