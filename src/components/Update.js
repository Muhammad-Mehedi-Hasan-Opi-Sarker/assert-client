import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const Update = () => {
    const {id}=useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res=>res.json()).then(data=>setData(data));
    },[])
    return (
        <div>
            <h1 className='2xl font-bold'>{data.name}</h1>
            
        </div>
    );
};

export default Update;