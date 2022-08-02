import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const Update = () => {
    const {id}=useParams();
    const [reload,setReload]=useState(false);
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://guarded-scrubland-45318.herokuapp.com/user/${id}`)
        .then(res=>res.json()).then(data=>setData(data));
    },[reload])

    // update function 
    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name,email)
        const data = { name, email };
        event.target.reset();
        // fetch data below
        const url=`https://guarded-scrubland-45318.herokuapp.com/user/${id}`
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Update Successfully')
                setReload(!reload)
            })
    }

    return (
        <div>
            <h1 className='2xl font-bold'>{data.name}</h1>
            <h1 className='2xl font-bold'>{data.email}</h1>
            <form className='mb-4' onSubmit={handleUpdate}>
                <input type="text" required placeholder="Type Your Name" name='name' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="email" required placeholder="Type Your Email" name='email' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
        </div>
    );
};

export default Update;