import React, { Component,useState,useEffect ,Fragment } from 'react';
import axios from 'axios';

import Table from './table';


const Main=()=>{

const [episodes,setEpisodes]=useState([]);
const [loading,setLoading]=useState(false);



const getEpisodes=async()=>{
   try{
       const data=await axios.get(`https://rickandmortyapi.com/api/episode/`)
       
       setEpisodes(data.data.results);
       setLoading(true);
       
   }
   catch(e){
       console.log(e)
   }


}


useEffect(()=>{getEpisodes()},[])


return(
<Fragment>
    <Table loading={loading} episodes={episodes}  />



</Fragment>




)


}







export default Main