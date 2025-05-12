import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Country = () => {
    let [all,setAll] = useState([]);
    useEffect(()=>{
    async function all(){
let data = await axios.get("https://restcountries.com/v3.1/all");
setAll(data.data)
    }
    all()
    },[])
  return (
    <>
    <select>
        {all.map(item=> 
        <option>{item.capital}</option>

        )}
    </select>
    </>
  )
}

export default Country