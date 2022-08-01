import React, { useEffect, useState } from 'react';

const Form = () => {

    // dataUser

    const [allData, setData] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/user`;
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [reload])

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name,email)
        const data = { name, email };
        event.target.reset();
        // fetch data below
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('user added success.')
                setReload()
            })

        // userData 


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder="Type Your Name" name='name' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="email" required placeholder="Type Your Email" name='email' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
            {/* Table Data  */}

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((data, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Form;