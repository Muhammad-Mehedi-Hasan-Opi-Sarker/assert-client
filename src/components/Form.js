import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Form = () => {

    // dataUser

    const [allData, setData] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const url = `https://guarded-scrubland-45318.herokuapp.com/user`;
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [reload])

    // data for delete 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure')
        if (proceed) {
            const url = `https://guarded-scrubland-45318.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setReload(!reload);
                })
        }
    }

    // data for update 
 

    // form data 
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name,email)
        const data = { name, email };
        event.target.reset();
        // fetch data below
        fetch('https://guarded-scrubland-45318.herokuapp.com/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('user added success.')
                setReload(!reload);
            })

    }
    return (
        <div>
            <form className='mb-4' onSubmit={handleSubmit}>
                <input type="text" required placeholder="Type Your Name" name='name' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="email" required placeholder="Type Your Email" name='email' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
            {/* Table Data  */}
            <h1 className='text-2xl font-bold text-primary mb-4'>See Submited Your Data</h1>
            <div id='data' class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((data, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td><Link to={`/update/${data._id}`}><button className='btn bg-danger'>Update</button></Link></td>
                                <td><button onClick={() => handleDelete(data._id)} className='btn bg-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Form;